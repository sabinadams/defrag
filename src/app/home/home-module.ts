// Core Imports
// ------------------------------------------------------------------------
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

// Http Interceptors
// ------------------------------------------------------------------------

// Components
// ------------------------------------------------------------------------
import { HomeComponent } from './home';
import { TimelineComponent } from './timeline/timeline';
import { TimelineItemComponent } from './timeline/timeline-item/timeline-item';
// Modules
// ------------------------------------------------------------------------

// Services
// ------------------------------------------------------------------------
import { TimelineService } from './shared/services/timeline-service';

// Routing
// ------------------------------------------------------------------------
import { AppRoutingModule } from '../app-routing.module';

// Others
// ------------------------------------------------------------------------

@NgModule({
  declarations: [HomeComponent, TimelineComponent, TimelineItemComponent],
  imports: [BrowserModule, FormsModule],
  exports: [],
  providers: [TimelineService]
})
export class HomeModule {}
