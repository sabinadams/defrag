import { Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { TimelineService } from './shared/services/timeline-service';
import { ITimelineItem } from './../shared/models/TimelineItem';
import { Observable } from 'rxjs/Observable';
import { TimelineItemComponent } from './timeline-item/timeline-item';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.scss']
})
export class TimelineComponent implements OnInit {
  feed_items: ITimelineItem[] = []; // Data container for all the feed items
  scrolling: boolean = false; // Keeps track of whether or not the timeline is scrolling
  scrollInterval: any; // Holds the interval for scrolling
  @ViewChild('timeline') el: ElementRef; // Reference to the timeline DOM object
  @ViewChildren('posts') postList: QueryList<TimelineItemComponent>; // Keeps track of the timeline's children elements and watches for changes
  childElements: Array<TimelineItemComponent> = []; // Holds the actual post element references so we can use values/functions
  scrollIndex: number; // Keeps track of which element we're at when auto scrolling

  constructor( private _timelineService: TimelineService ) {}
  
  ngOnInit() {
    this._timelineService.populateFeed().subscribe(res => {
      this.feed_items.push(...res);
    }); 
  }
  
  ngAfterViewInit() {
    // Initializes the postList variable
    this.postList.forEach( item => this.childElements.push(item));
    // Watches for changes and updates the postList variable with additions
    this.postList.changes.subscribe(() => {
        this.childElements = this.postList.toArray();
    });
  }

  // Finds out which post is closest to the middle of the visible area of the timeline
  // Gets run once when you hit the toggler button. Should probably be changed
  getScrollIndex() {
    let finalindex = 0;
    this.feed_items.some( (post, index) => {
      finalindex = index;
      let item = document.getElementById(`timeline-item-${post.ID}`);
      return (item.offsetLeft - this.el.nativeElement.scrollLeft) - (this.el.nativeElement.clientWidth / 2) > 0
    });
    return finalindex;
  }
  

  clickPost(i) {
    // Should also open the post
    this.scrollIndex = i;
    if ( this.scrolling) {
      this.scrolling = false;
      clearInterval(this.scrollInterval);
    }
  }

  toggleScroll() {
    this.scrolling = !this.scrolling;
    if( this.scrolling ) {
      this.scrollIndex = this.getScrollIndex();
      this.scrollInterval = setInterval(() => {
        this.childElements[this.scrollIndex].scrollToMe(true);
        if ( !this.childElements[this.scrollIndex + 1] ) {
          // Or load more posts. 
          this.scrolling = !this.scrolling;
          clearInterval( this.scrollInterval );  
        }
        this.scrollIndex++;
      }, 5000);
    } else {
      clearInterval(this.scrollInterval);
    }
  }
}