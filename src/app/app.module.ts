// Core Imports
// ------------------------------------------------------------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Components
// ------------------------------------------------------------------------
import { AppComponent } from './app.component';

// Modules
// ------------------------------------------------------------------------

// Services
// ------------------------------------------------------------------------
import { BaseService } from './shared/services/base-service';

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
    HttpClientModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
