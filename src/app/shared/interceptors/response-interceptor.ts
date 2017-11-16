import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { isDevMode, Injectable } from '@angular/core';
import { AlertService } from '../services/alert-service';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from "@angular/common/http";
@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private _alertService: AlertService) {}
  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    return next.handle(req).do(
      (event: HttpResponse<any>) => {
          // Handle caching
      },
      (err: HttpErrorResponse) => {
        this._alertService.emitNotification({
          status: err.status,
          message: err.message,
          auto_dismiss: false
        });

        if ( isDevMode ) {
            console.error(`Error[${err.status}] ${err.error.message || err.statusText}`);
        }
      }
    );
  }
}
