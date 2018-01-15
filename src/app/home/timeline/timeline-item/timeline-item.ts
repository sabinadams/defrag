import { Component, OnInit, Input } from '@angular/core';
import { TimelineService } from '../../shared/services/timeline-service';
import { Observable } from 'rxjs/Observable';
import { ITimelineItem } from "../../../shared/models/TimelineItem";

@Component({
  selector: 'timeline-item',
  templateUrl: './timeline-item.html',
  styleUrls: ['./timeline-item.scss']
})
export class TimelineItemComponent implements OnInit {
  @Input() post: ITimelineItem;
  constructor( private _timelineService: TimelineService ) {}
  ngOnInit() {}

  saveComment(e: any) {
    console.log(e)
  }
}
