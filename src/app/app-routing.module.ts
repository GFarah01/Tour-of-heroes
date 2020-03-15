import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// imports RouterModule and Routes so the app can have routing functionality
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

/**
 * A typical Angular Route has two properties:
  - path: a string that matches the URL in the browser address bar.
  - component: the component that the router should create when navigating to this route.
 */
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  // The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
  { path: 'details/:id', component: HeroDetailsComponent },
  { path: 'dashboard', component: DashbordComponent },
  /**
   * Default route
   * This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
   */
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
