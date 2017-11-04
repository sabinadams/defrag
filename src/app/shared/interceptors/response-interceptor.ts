import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { isDevMode } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from "@angular/common/http";
export class ResponseInterceptor implements HttpInterceptor {
    constructor() {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        return next.handle(req).do( (event: HttpResponse<any>) => {}, (err: HttpErrorResponse) => {
            switch( err.status ) {
                case 400:
                    // Handle 400 Bad Request
                break;
                case 401:
                    // Handle 401 Unauthorized 
                break;
                case 403:
                    // Handle 403 Forbidden
                break;
                case 404:
                    // Handle 404 Not found
                break;
                case 500:
                    // Handle 500 Error
                break;
                case 501:
                    // Handle 501 Not Implemented
                break;
                case 520:
                    // Handle 520 Unknown
                break;
            }
            console.log(`Error[${err.status}] ${err.statusText}`);
            // Handle the message with the notification service
        });
    }
}
