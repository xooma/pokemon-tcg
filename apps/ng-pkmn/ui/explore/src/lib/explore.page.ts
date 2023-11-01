import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundComponent, SearchComponent } from './components';

@Component({
  selector: 'pkmn-explore',
  standalone: true,
  imports: [CommonModule, BackgroundComponent, SearchComponent],
  template: `
    <div class="hero">
      <pkmn-explore-background />
      <h1>Rechercher des cartes</h1>
      <pkmn-explore-search />
    </div>
  `,
  styles: [],
})
export class ExplorePage {}
