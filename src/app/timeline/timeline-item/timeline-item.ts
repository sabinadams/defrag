import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TimelineService } from '../shared/services/timeline-service';
import { ITimelineItem } from "../../shared/models/TimelineItem";

@Component({
  selector: 'timeline-item',
  templateUrl: './timeline-item.html',
  styleUrls: ['./timeline-item.scss']
})
export class TimelineItemComponent implements OnInit {
  @Input() post: ITimelineItem; // The details of the post provided by the parent
  @Input() container: any; // A reference to this post's container
  text: String; // Temp variable to test different text sizes

  // A function that scrolls the parent to this post
  scrollToMe = (auto: boolean = false) => {
    this.container.nativeElement.scrollTo({
      behavior: 'smooth',
      left: this.container.nativeElement.scrollLeft + 120 
        + (this.el.nativeElement.offsetLeft - this.container.nativeElement.scrollLeft) 
        - (this.container.nativeElement.clientWidth / 2)
    });
  }

  constructor( private _timelineService: TimelineService, public el: ElementRef ) {}

  ngOnInit() {
    this.text = `${this.post.ID}: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up
      one of the more obscure Latin words, consectetur`;
  }  

}
