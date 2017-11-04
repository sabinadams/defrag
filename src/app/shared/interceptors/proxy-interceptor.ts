import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from '../services/base-service';

@Injectable()
export class ProxyInterceptor implements HttpInterceptor {
  
  constructor( private _base: BaseService ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request so we can modify the url to point to the correct server for our environment
    const proxyReq = req.clone({ url: `${this._base.env.api}${req.url}` });

    // Pass on the cloned request instead of the original request.
    return next.handle(proxyReq);
  }
}
