import { Component } from '@angular/core';
import * as io from "socket.io-client";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "gamr-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

// IMPORTANT: https://www.facebook.com/midnightpulp/videos/1763726663640085/
export class AppComponent {
  // Temporary so Sabin can build Home Page stuff while Alex is building login
  loggedin = true; 
}
