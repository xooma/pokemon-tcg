import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pkmn-explore-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="background-video">
      <video autoplay muted loop>
        <source src="assets/bg.mp4" type="video/mp4"/>
        Votre navigateur ne prend pas en charge la vidéo.
      </video>
    </div>
  `,
  styles: [
    `
      .background-video:before {
        background: radial-gradient(circle, rgba(49,51,143,0) 0%, rgba(49,26,64,1) 100%);
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 1;
      }

      .background-video {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
      }

      video {
        object-fit: cover;
      }
    `,
  ],
})
export class BackgroundComponent {}
