import { Injectable } from '@angular/core';
import { BaseService } from './base-service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService extends BaseService {
  constructor(private http: HttpClient) { super(); }

  public test() {
      return this.http.get<any>(`/example/getuser`);
  }
}
