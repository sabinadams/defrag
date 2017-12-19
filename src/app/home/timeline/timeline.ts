import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../shared/services/timeline-service';
import { ITimelineItem } from '../../shared/models/TimelineItem';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.scss']
})
export class TimelineComponent implements OnInit {
  feed_items: Observable<ITimelineItem[]>;
  constructor( private _timelineService: TimelineService ) {}
  ngOnInit() {
      this.feed_items = this._timelineService.populateFeed();     
  }
}