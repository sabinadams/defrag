import { Component } from "@angular/core";
import { Router } from '@angular/router';
@Component({
  selector: "navbar",
  templateUrl: "./navbar.html",
  styleUrls: ["./navbar.scss"]
})

export class NavbarComponent {
    currRoute: string;
    showTop = true;
    routes = [
        { label: 'Home', location: '' },
        { label: 'Discover', location: 'discover' },
        { label: 'News', location: 'games' },
        { label: 'Interact', location: 'shop' }
    ];
    constructor( private router: Router){}

    ngOnInit() {
        this.currRoute = this.router.url;
    }

    toggleTop() {
        this.showTop = !this.showTop;
    }
}
