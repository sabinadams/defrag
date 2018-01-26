import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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
  postIDList: Array<number> = []; // Need to upload the postIDList with buildIndex() 
  @ViewChild('timeline') el: ElementRef; 

  constructor( private _timelineService: TimelineService, public el: ElementRef ) {}
  
  ngOnInit() {
    this.feed_items = this._timelineService.populateFeed(); 
  }

  handleScroll(e) {
    // Number correlates to sm-break in SCSS, 17 correlates to scrollbar padding workaround width
    if ( screen.width - 700 + 17 <= self.innerWidth ) {
      e.preventDefault();
      this.el.nativeElement.scrollLeft += e.deltaY ? e.deltaY : e.detail * 25;
    }
  }
  

  scrollToItem(id) {
    let item = document.getElementById(`timeline-item-${id}`);
    this.el.nativeElement.scrollTo({
      behavior: 'smooth',
      left: this.el.nativeElement.scrollLeft + 120 + (item.offsetLeft - this.el.nativeElement.scrollLeft) - (this.el.nativeElement.clientWidth / 2)
    });
  }

  getScrollIndex( returnNumber ) {
    let index = 0;
    let feedSubscription = this.feed_items.subscribe( feed => {
      index = feed[0].ID;
      feed.some( post => {
        let item = document.getElementById(`timeline-item-${post.ID}`);
        if ( (item.offsetLeft - this.el.nativeElement.scrollLeft) - (this.el.nativeElement.clientWidth / 2) > 0 ) {
          index = post.ID;
          return true;
        }
      });
    }, 
    e => console.error,
    () => { 
      returnNumber(index); 
    });
   feedSubscription.unsubscribe();
  }

  buildIndex(){
    let sub = this.feed_items.subscribe( feed => {
      feed.forEach( item => {this.postIDList.push(item.ID)})
    });
    sub.unsubscribe();
  }  
  
  toggleScroll() {
    this.buildIndex();
    this.scrolling = !this.scrolling;
    if(this.scrolling) {
        let postIndex;
        this.getScrollIndex( index => {
          console.log(index)
          postIndex = index;
          this.scrollInterval = setInterval(() => {
            this.scrollToItem(postIndex);
            if ( this.postIDList[this.postIDList.indexOf(postIndex) + 1] ) {
              postIndex = this.postIDList[this.postIDList.indexOf(postIndex) + 1];
            } else {
              // Or load more posts. 
              // Need to upload the postIDList with buildIndex()
              this.scrolling = !this.scrolling;
              clearInterval(this.scrollInterval);  
            }
          }, 1500);
        });
    } else {
      clearInterval(this.scrollInterval);
    }
  }
}