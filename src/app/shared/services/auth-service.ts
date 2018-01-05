import { Injectable } from '@angular/core';
import { BaseService } from './base-service';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AuthService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  public test() {
    return this.http.get<any>(`/example/getuser`);
  }
  
  // Creates randomized UUID Token for authentication
  public _generateToken() {
    let d = new Date().getTime();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
      const r = ((d + Math.random() * 16) % 16) | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : (r & 0x7) | 0x8).toString(16);
    });
  }
}
