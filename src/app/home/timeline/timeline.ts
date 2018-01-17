import { Component, OnInit, ElementRef } from '@angular/core';
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
  constructor( private _timelineService: TimelineService, public el: ElementRef ) {
   
  }
  ngOnInit() {
      this.feed_items = this._timelineService.populateFeed();     
  }
}