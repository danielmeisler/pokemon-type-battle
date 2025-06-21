import { LitElement, css, html } from 'lit';
import { type PokemonType, type Type, types } from '../data/types.js';

class Game extends LitElement {
	static styles = css`
    :host {
      --max-width: 400px;
    }

    .game {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      max-width: var(--max-width);
      gap: 20px;
      box-sizing: border-box;
    }

    .battle-field {
      width: 100%;
      aspect-ratio: 1 / 1;
    }

    .button-grid {
      width: 100%;
      aspect-ratio: 2 / 1;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
  `;

	randomType(): Type {
		const typeKeys = Object.keys(types) as Type[];
		const randomIndex = Math.floor(Math.random() * typeKeys.length);
		return typeKeys[randomIndex];
	}

	render() {
		const attackerType: PokemonType = types[this.randomType()];
		const defenderType: PokemonType = types[this.randomType()];

		return html`
      <ptb-layout>
        <div class="game">
          <div class="battle-field">
            <ptb-field
              defender-color="${attackerType.color}"
              defender-icon="${attackerType.icon}"
              defender-type="${attackerType.label}"
              attacker-color="${defenderType.color}"
              attacker-icon="${defenderType.icon}"
              attacker-type="${defenderType.label}"
            ></ptb-field>
          </div>

          <div class="button-grid">
            <ptb-button>0x</ptb-button>
            <ptb-button>¼x</ptb-button>
            <ptb-button>½x</ptb-button>
            <ptb-button>1x</ptb-button>
            <ptb-button>2x</ptb-button>
            <ptb-button>4x</ptb-button>
          </div>
        </div>
      </ptb-layout>
    `;
	}
}

customElements.define('ptb-view-game', Game);
