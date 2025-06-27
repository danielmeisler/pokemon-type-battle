import { LitElement, css, html } from 'lit';
import { state } from 'lit/decorators.js';
import type { ButtonState } from '../components/Button.js';
import { type Effectiveness, type PokemonType, type Type, types } from '../data/types.js';

class Game extends LitElement {
	static styles = css`
    .game {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      gap: 20px;
      box-sizing: border-box;
    }

    .battle-field {
      width: 100%;
      aspect-ratio: 1 / 1;
    }

    .button-grid {
      width: 100%;
      aspect-ratio: 1.5 / 1;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  `;

	@state() attackerType: PokemonType = types[this.randomType()];
	@state() defenderType: PokemonType = types[this.randomType()];

	@state() userEffectiveness: Effectiveness = 'neutral';
	@state() correctEffectiveness: Effectiveness = 'neutral';

	@state() isFieldAnimationActive = false;

	@state() buttonStatesMap: Record<Effectiveness, ButtonState> = {
		nullified: 'neutral',
		quarter: 'neutral',
		half: 'neutral',
		neutral: 'neutral',
		double: 'neutral',
		quadruple: 'neutral',
	};

	@state() buttonDisabledMap: Record<Effectiveness, boolean> = {
		nullified: false,
		quarter: false,
		half: false,
		neutral: false,
		double: false,
		quadruple: false,
	};

	#resetTime = 1000;

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

		this.toggleDisabledButtons(true);

		this.userEffectiveness = value;
		this.correctEffectiveness = this.getEffectiveness();

		if (this.userEffectiveness === this.correctEffectiveness) {
			this.buttonStatesMap[this.userEffectiveness] = 'right';
		} else if (this.userEffectiveness !== this.correctEffectiveness) {
			this.buttonStatesMap[this.userEffectiveness] = 'wrong';
			this.buttonStatesMap[this.correctEffectiveness] = 'right';
		}

		setTimeout(() => {
			this.resetButtons();
			this.toggleDisabledButtons(false);
			this.getTypes();
			this.isFieldAnimationActive = false;
		}, this.#resetTime);
	}

	getTypes() {
		this.isFieldAnimationActive = true;
		console.log(this.isFieldAnimationActive);
		this.attackerType = types[this.randomType()];
		this.defenderType = types[this.randomType()];
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
		for (const key in this.buttonStatesMap) {
			this.buttonStatesMap[key as keyof typeof this.buttonStatesMap] = 'neutral';
		}
		this.requestUpdate();
	}

	toggleDisabledButtons(disabled: boolean) {
		for (const key in this.buttonDisabledMap) {
			this.buttonDisabledMap[key as keyof typeof this.buttonDisabledMap] = disabled;
		}
		this.requestUpdate();
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
							?is-animation-active="${this.isFieldAnimationActive}"
            ></ptb-field>
          </div>

          <div class="button-grid">
            <ptb-button @click="${this.handleClick}" state="${this.buttonStatesMap.nullified}" ?is-disabled="${this.buttonDisabledMap.nullified}" data-effectiveness="nullified">0x</ptb-button>
            <!-- <ptb-button @click="${this.handleClick}" state="${this.buttonStatesMap.quarter}" ?is-disabled="${this.buttonDisabledMap.quarter}" data-effectiveness="quarter">¼x</ptb-button> -->
            <ptb-button @click="${this.handleClick}" state="${this.buttonStatesMap.half}" ?is-disabled="${this.buttonDisabledMap.half}" data-effectiveness="half">½x</ptb-button>
            <ptb-button @click="${this.handleClick}" state="${this.buttonStatesMap.neutral}" ?is-disabled="${this.buttonDisabledMap.neutral}" data-effectiveness="neutral">1x</ptb-button>
            <ptb-button @click="${this.handleClick}" state="${this.buttonStatesMap.double}" ?is-disabled="${this.buttonDisabledMap.double}" data-effectiveness="double">2x</ptb-button>
            <!-- <ptb-button @click="${this.handleClick}" state="${this.buttonStatesMap.quadruple}" ?is-disabled="${this.buttonDisabledMap.quadruple}" data-effectiveness="quadruple">4x</ptb-button> -->
          </div>
        </div>
      </ptb-layout>
    `;
	}
}

customElements.define('ptb-view-game', Game);
