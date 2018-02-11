// Core Imports
// ------------------------------------------------------------------------
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

// Http Interceptors
// ------------------------------------------------------------------------

// Components
// ------------------------------------------------------------------------
import { ProfileComponent } from './profile';

// Modules
// ------------------------------------------------------------------------

// Services
// ------------------------------------------------------------------------
import { AuthService } from '../shared/services/auth-service';

// Routing
// ------------------------------------------------------------------------
import { AppRoutingModule } from '../app-routing.module';

// Directives
// ------------------------------------------------------------------------


// Others
// ------------------------------------------------------------------------

@NgModule({
    declarations: [
       ProfileComponent
    ],
    imports: [BrowserModule, FormsModule],
    exports: [],
    providers: []
})
export class ProfileModule { }
