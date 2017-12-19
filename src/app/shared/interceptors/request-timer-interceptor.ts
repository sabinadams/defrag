import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { isDevMode } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';

export class TimingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if ( !isDevMode() ) return next.handle(req);
    const started = Date.now();
    return next
      .handle(req)
      .do(event => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          console.info(`(${elapsed}ms) Request for ${req.urlWithParams}`);
        }
      });
  }

}
