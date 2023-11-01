import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pkmn-explore-search',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="search">
      <input id="input" />
      <button id="button">
        <span class="material-symbols-rounded">search</span>
      </button>
      <div class="spinner"><i class="fa fa-spinner"></i></div>
    </div>
  `,
  styles: [
    `
      .material-symbols-rounded {
        color: white;
        font-size: 30px;
        vertical-align: text-bottom;
        font-variation-settings:
          'FILL' 0,
          'wght' 500,
          'GRAD' 0,
          'opsz' 24;
      }

      #search {
        align-items: center;
        background: rgba(138, 68, 213, 0.6);
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        margin: 0.5em 0;
        padding: 0.5em 0.5em 0.5em 1em;
        transition: all 0.5s;
        width: 500px;
        font:
          30px/1.375 'Lato',
          arial,
          sans-serif;
      }

      #search:hover,
      #search:focus {
        background: #853cd3;
        color: white;
      }

      #search button,
      #search input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: transparent;
        border: 0;
        color: inherit;
        font: inherit;
        outline: 0;
      }

      #search button {
        cursor: pointer;
        padding: 0 0.25em;
      }

      #search input {
        flex: 1;
      }

      #search input::-moz-placeholder {
        color: #fff;
      }

      #search input:-ms-input-placeholder {
        color: #fff;
      }

      #search input::placeholder {
        color: #fff;
      }

      #search .spinner {
        -webkit-animation: spinner 1s infinite linear;
        animation: spinner 1s infinite linear;
        display: none;
        padding: 0 0.25em;
      }

      #search.loading button {
        display: none;
      }

      #search.loading .spinner {
        display: block;
      }

      @-webkit-keyframes spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class SearchComponent {}
