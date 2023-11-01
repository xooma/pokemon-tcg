import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundComponent, SearchComponent } from './components';

@Component({
  selector: 'pkm-explore',
  standalone: true,
  imports: [CommonModule, BackgroundComponent, SearchComponent],
  template: `<ng-container>
    <pkmn-explore-background />
    <pkmn-explore-search />
  </ng-container> `,
  styles: [],
})
export class ExplorePage {}
