import { Component } from "@angular/core";
import { Router } from '@angular/router';
@Component({
  selector: "navbar",
  templateUrl: "./navbar.html",
  styleUrls: ["./navbar.scss"]
})

export class NavbarComponent {
    currRoute: string;
    constructor( private router: Router){}

    ngOnInit() {
        this.currRoute = this.router.url;
    }
}
