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
import { NavbarComponent } from './shared/components/navbar/navbar';
import { AlertsComponent } from './shared/components/alerts/alerts';
// Modules
// ------------------------------------------------------------------------
import { TimelineModule } from './timeline/timeline-module';

// Services
// ------------------------------------------------------------------------
import { BaseService } from './shared/services/base-service';
import { AuthService } from './shared/services/auth-service';
import { AlertService } from './shared/services/alert-service';

// Routing
// ------------------------------------------------------------------------
import { AppRoutingModule } from './app-routing.module';

// Others
// ------------------------------------------------------------------------

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, AlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TimelineModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ProxyInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
    BaseService, AuthService, AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
