import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Imports
import { TimelineComponent } from './timeline/timeline';

const routes: Routes = [
  { path: '', component: TimelineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
