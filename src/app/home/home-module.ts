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
import { AuthService } from '../shared/services/auth-service';

// Routing
// ------------------------------------------------------------------------
import { AppRoutingModule } from '../app-routing.module';

// Directives
import { EditableDivDirective } from "../shared/directives/editable-div-directive";
// Others
// ------------------------------------------------------------------------

@NgModule({
  declarations: [
    HomeComponent,
    TimelineComponent,
    TimelineItemComponent,
    EditableDivDirective
  ],
  imports: [BrowserModule, FormsModule],
  exports: [],
  providers: [TimelineService, AuthService]
})
export class HomeModule {}
