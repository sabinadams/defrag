import { Component, OnInit, ElementRef } from '@angular/core';
import { TimelineService } from './shared/services/timeline-service';
import { ITimelineItem } from './../shared/models/TimelineItem';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'timeline',
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.scss']
})
export class TimelineComponent implements OnInit {
  feed_items: Observable<ITimelineItem[]>;
  scrolling: boolean = false;
  scrollInterval: any;
  constructor( private _timelineService: TimelineService, public el: ElementRef ) {
   
  }
  ngOnInit() {
      this.feed_items = this._timelineService.populateFeed();     
  }

  handleScroll(e) {
    if ( self.innerWidth + 150 >= screen.width ) {
      e.preventDefault();
      document.getElementById("tct").scrollLeft += e.deltaY ? e.deltaY : e.detail * 25;
    }
  }

  scrollToItem(number) {
   document.getElementById(`timeline-item-${number}`)
    .scrollIntoView({behavior: 'smooth',  inline: 'center'});
  }

  toggleScroll() {
    this.scrolling = !this.scrolling;
    if(this.scrolling) {
      this.scrollInterval = setInterval(() => {
        document.getElementById("tct").scrollLeft += 2;
      }, 20);
    } else {
      clearInterval(this.scrollInterval);
    }
  }
}