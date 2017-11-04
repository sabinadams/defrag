// Core Imports
// ------------------------------------------------------------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Http Interceptors
// ------------------------------------------------------------------------
import { AuthInterceptor } from './shared/interceptors/auth-interceptor';
import { TimingInterceptor } from './shared/interceptors/request-timer-interceptor';
import { ResponseInterceptor } from './shared/interceptors/response-interceptor';
import { ProxyInterceptor } from './shared/interceptors/proxy-interceptor';

// Components
// ------------------------------------------------------------------------
import { AppComponent } from './app.component';

// Modules
// ------------------------------------------------------------------------

// Services
// ------------------------------------------------------------------------
import { BaseService } from './shared/services/base-service';
import { AuthService } from './shared/services/auth-service';

// Routing
// ------------------------------------------------------------------------
import { AppRoutingModule } from './app-routing.module';

// Others
// ------------------------------------------------------------------------

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ProxyInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
    BaseService, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
