import { ITimelineItem } from '../../../shared/models/TimelineItem';
import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/services/base-service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TimelineService extends BaseService {
  constructor(private http: HttpClient ) { super(); }

  public populateFeed(): Observable<ITimelineItem[]> {
    let feedItems: ITimelineItem[] = [];
    for (let i = 0; i < 15; i++ ) {
      setTimeout(() => {
        feedItems.push({
          ID: i,
          text: "This is a test post",
          creation_date: new Date(),
          shared: false,
          uuid: this._generateToken(),
          parent_ID: null,
          exp_count: 200,
          type_ID: 1,
          likes: [
            {
              username: "Test User 1",
              ID: 2
            },
            {
              username: "Test User 2",
              ID: 3
            }
          ],
          user: {
            username: "Sabin",
            tag: "sabin",
            ID: 1
          }
        });
      }, 900);
    }
    return Observable.of(feedItems);
  }
  
}
