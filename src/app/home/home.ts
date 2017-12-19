import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth-service";

@Component({
  selector: "home-page",
  templateUrl: "./home.html",
  styleUrls: ["./home.scss"]
})
export class HomeComponent implements OnInit{
  constructor( private _authService: AuthService) {}
  ngOnInit() {
    this._authService.test().subscribe(console.log);
  }
}
