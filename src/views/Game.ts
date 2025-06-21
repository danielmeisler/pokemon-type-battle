import { LitElement, css, html } from 'lit';
import { state } from 'lit/decorators.js';
import { type Effectiveness, type PokemonType, type Type, types } from '../data/types.js';

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

	@state() attackerType: PokemonType = types[this.randomType()];
	@state() defenderType: PokemonType = types[this.randomType()];
	@state() effectiveness: Effectiveness = 'neutral';

	randomType(): Type {
		const typeKeys = Object.keys(types) as Type[];
		const randomIndex = Math.floor(Math.random() * typeKeys.length);
		return typeKeys[randomIndex];
	}

	checkResult(event: Event) {
		const target = event.currentTarget as HTMLElement;
		const value = target.dataset.effectiveness as Effectiveness;

		if (!value) {
			return;
		}

		this.effectiveness = value;

		// Check AttackerType in types and then DefenderType in effective, ineffective and nullified;
	}

	render() {
		return html`
      <ptb-layout>
        <div class="game">
          <div class="battle-field">
            <ptb-field
              defender-color="${this.attackerType.color}"
              defender-icon="${this.attackerType.icon}"
              defender-type="${this.attackerType.label}"
              attacker-color="${this.defenderType.color}"
              attacker-icon="${this.defenderType.icon}"
              attacker-type="${this.defenderType.label}"
            ></ptb-field>
          </div>

          <div class="button-grid">
            <ptb-button @click="${this.checkResult}" data-effectiveness="nullified">0x</ptb-button>
            <ptb-button @click="${this.checkResult}" data-effectiveness="quarter">¼x</ptb-button>
            <ptb-button @click="${this.checkResult}" data-effectiveness="half">½x</ptb-button>
            <ptb-button @click="${this.checkResult}" data-effectiveness="neutral">1x</ptb-button>
            <ptb-button @click="${this.checkResult}" data-effectiveness="double">2x</ptb-button>
            <ptb-button @click="${this.checkResult}" data-effectiveness="quadruple">4x</ptb-button>
          </div>
        </div>
      </ptb-layout>
    `;
	}
}

customElements.define('ptb-view-game', Game);
