import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth-service';

@Component({
  selector: 'gamr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor( private _authService: AuthService ) {}

  ngOnInit() {
    this._authService.test().subscribe(console.log);
  }

}
