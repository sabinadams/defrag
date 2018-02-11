import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Imports
import { TimelineComponent } from './timeline/timeline';
import { ProfileComponent } from './profile/profile';

const routes: Routes = [
  { path: '', component: TimelineComponent },
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
