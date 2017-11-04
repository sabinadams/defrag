import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from '../services/base-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // Keep this in sync with backend middleware's whitelist
  whitelist: String[] = [
    '/auth/login'
  ]
  constructor( private _base: BaseService ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if ( this.whitelist.indexOf( req.url ) > -1 ) return next.handle(req);

    // Clone the request to add the new header.
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}
