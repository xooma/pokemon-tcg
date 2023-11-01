import {Routes} from '@angular/router';
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'explore' },
  { path: 'explore', loadComponent: () => import('@ui/explore').then(({ ExplorePage }) => ExplorePage) }
];
