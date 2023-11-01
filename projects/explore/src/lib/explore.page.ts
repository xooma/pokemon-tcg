import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundComponent, SearchComponent } from './components';

@Component({
  selector: 'pkm-explore',
  standalone: true,
  imports: [CommonModule, BackgroundComponent, SearchComponent],
  template: `
    <div class="hero">
      <pkmn-explore-background />
      <h1>Recherche des cartes</h1>
      <pkmn-explore-search />
    </div>
  `,
  styles: [],
})
export class ExplorePage {}
