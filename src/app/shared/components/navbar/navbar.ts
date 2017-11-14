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
        { label: 'Profile', location: 'profile' },
        { label: 'Discover', location: 'discover' },
        { label: 'Games', location: 'games' },
        { label: 'Shop', location: 'shop' }
    ];
    constructor( private router: Router){}

    ngOnInit() {
        this.currRoute = this.router.url;
    }

    toggleTop() {
        this.showTop = !this.showTop;
    }
}
