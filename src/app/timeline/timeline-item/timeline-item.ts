import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TimelineService } from '../shared/services/timeline-service';
import { ITimelineItem } from "../../shared/models/TimelineItem";

@Component({
  selector: 'timeline-item',
  templateUrl: './timeline-item.html',
  styleUrls: ['./timeline-item.scss']
})
export class TimelineItemComponent implements OnInit {
  @Input() post: ITimelineItem;
  @Input() last: boolean;
  @Input() first: boolean;
  text: String;
  constructor( private _timelineService: TimelineService ) {
   
  }

  ngOnInit() {
    this.text = `
      ${this.post.ID}: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up
      one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
      of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
      sit amet..", comes from a line in section 1.10.32.
    `;
  
    this.text = this.text.substring(0, Math.floor(Math.random() * this.text.length));
    if ( this.text.length > 200 ) {
      this.text = this.text.substring(0, 200);
    } else if ( this.text.length < 1 ) {
      this.text = "Contrary to popular belief, Lorem Ipsum is not simply random text.";
    }
  }

  saveComment(e: any) {
    console.log(e);
  }
  
  scrollToMe() {
    let el = document.getElementById(`timeline-item-${this.post.ID}`);
    let tct = document.getElementById('tct');
  console.log(tct.scrollLeft, el.offsetLeft)
    if ( (tct.scrollLeft == 0 && this.first) || this.last) return this.openPost();
    if (Math.floor(tct.scrollLeft + 120 + (el.offsetLeft - tct.scrollLeft) - (tct.clientWidth / 2)) != Math.floor(tct.scrollLeft) ) {
      tct.scrollTo({
        behavior: 'smooth',
        left: tct.scrollLeft + 120 + (el.offsetLeft - tct.scrollLeft) - (tct.clientWidth / 2)
      });
    } else {
      this.openPost();
    }
  }

  openPost() {
    alert(`Opening post: ${this.post.ID}`);
  }
}
