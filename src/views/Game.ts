import { LitElement, css, html } from 'lit';
import { state } from 'lit/decorators.js';
import type { ButtonState } from '../components/Button.js';
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

	@state() userEffectiveness: Effectiveness = 'neutral';
	@state() correctEffectiveness: Effectiveness = 'neutral';

	@state() buttonKeyMap: Record<Effectiveness, ButtonState> = {
		nullified: 'neutral',
		quarter: 'neutral',
		half: 'neutral',
		neutral: 'neutral',
		double: 'neutral',
		quadruple: 'neutral',
	};

	randomType(): Type {
		const typeKeys = Object.keys(types) as Type[];
		const randomIndex = Math.floor(Math.random() * typeKeys.length);
		return typeKeys[randomIndex];
	}

	handleClick(event: Event) {
		const target = event.currentTarget as HTMLElement;
		const value = target.dataset.effectiveness as Effectiveness;

		if (!value) {
			return;
		}

		this.userEffectiveness = value;
		this.correctEffectiveness = this.getEffectiveness();

		if (this.userEffectiveness === this.correctEffectiveness) {
			this.buttonKeyMap[this.userEffectiveness] = 'right';
		} else if (this.userEffectiveness !== this.correctEffectiveness) {
			this.buttonKeyMap[this.userEffectiveness] = 'wrong';
			this.buttonKeyMap[this.correctEffectiveness] = 'right';
		}
	}

	getEffectiveness() {
		if (this.attackerType.effective.includes(this.defenderType.type)) {
			return 'double';
		}
		if (this.attackerType.ineffective.includes(this.defenderType.type)) {
			return 'half';
		}
		if (this.attackerType.nullified.includes(this.defenderType.type)) {
			return 'nullified';
		}
		return 'neutral';
	}

	resetButtons() {
		// Reset map
		// this.buttonKeyMap= 'neutral';
	}

	render() {
		return html`
      <ptb-layout>
        <div class="game">
          <div class="battle-field">
            <ptb-field
              defender-color="${this.defenderType.color}"
              defender-icon="${this.defenderType.icon}"
              defender-type="${this.defenderType.label}"
              attacker-color="${this.attackerType.color}"
              attacker-icon="${this.attackerType.icon}"
              attacker-type="${this.attackerType.label}"
            ></ptb-field>
          </div>

          <div class="button-grid">
            <ptb-button @click="${this.handleClick}" state="${this.buttonKeyMap.nullified}" data-effectiveness="nullified">0x</ptb-button>
            <ptb-button @click="${this.handleClick}" state="${this.buttonKeyMap.quarter}" data-effectiveness="quarter">¼x</ptb-button>
            <ptb-button @click="${this.handleClick}" state="${this.buttonKeyMap.half}" data-effectiveness="half">½x</ptb-button>
            <ptb-button @click="${this.handleClick}" state="${this.buttonKeyMap.neutral}" data-effectiveness="neutral">1x</ptb-button>
            <ptb-button @click="${this.handleClick}" state="${this.buttonKeyMap.double}" data-effectiveness="double">2x</ptb-button>
            <ptb-button @click="${this.handleClick}" state="${this.buttonKeyMap.quadruple}" data-effectiveness="quadruple">4x</ptb-button>
          </div>
        </div>
      </ptb-layout>
    `;
	}
}

customElements.define('ptb-view-game', Game);
