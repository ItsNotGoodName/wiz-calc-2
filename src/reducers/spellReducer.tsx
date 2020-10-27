import { CharacterType, SpellType } from "../types";
import { parseNum, calculateAllSpell } from "../utils";

export type SpellActions =
  | {
      type: "change_name";
      name: string;
    }
  | {
      type: "change_base";
      index: number;
      value: string;
    }
  | {
      type: "add_base";
    }
  | {
      type: "delete_base";
      index: number;
    }
  | {
      type: "calculate";
      character: CharacterType;
    }
  | {
      type: "toggle_enchantment";
    }
  | {
      type: "toggle_enchantment_calculation";
    }
  | {
      type: "change_enchantment";
      value: string;
    }
  | {
      type: "toggle_increment";
    }
  | {
      type: "change_increment";
      pips?: string;
      base?: string;
    }
  | {
      type: "delete_spell";
    };

export const spellReducer = (
  state: SpellType,
  action: SpellActions
): SpellType => {
  switch (action.type) {
    case "change_name": {
      return { ...state, name: action.name };
    }
    case "add_base": {
      const bases = [...state.bases];
      const damages = [...state.damages];
      bases.push(0);
      damages.push(0);
      return { ...state, bases, damages };
    }
    case "change_base": {
      const bases = [...state.bases];
      bases[action.index] = parseNum(action.value);
      return { ...state, bases };
    }
    case "delete_base": {
      const bases = [];
      const damages = [];
      for (let i = 0; i < state.bases.length; i++) {
        if (action.index !== i) {
          bases.push(state.bases[i]);
          damages.push(state.damages[i]);
        }
      }
      return { ...state, bases, damages };
    }
    case "calculate": {
      const newState = { ...state };
      calculateAllSpell(newState, action.character);
      return newState;
    }
    case "toggle_enchantment": {
      return {
        ...state,
        enchantment:
          state.enchantment === undefined
            ? { base: 300, enabled: true }
            : undefined,
      };
    }
    case "toggle_enchantment_calculation": {
      if (state.enchantment === undefined) return state;
      return {
        ...state,
        enchantment: {
          ...state.enchantment,
          enabled: !state.enchantment.enabled,
        },
      };
    }
    case "change_enchantment": {
      if (state.enchantment === undefined) return state;
      return {
        ...state,
        enchantment: {
          ...state.enchantment,
          base: parseNum(action.value),
        },
      };
    }
    case "toggle_increment": {
      return {
        ...state,
        increment:
          state.increment === undefined
            ? {
                base: 0,
                pips: 1,
              }
            : undefined,
      };
    }
    case "change_increment": {
      if (state.increment === undefined) return state;

      const increment = { ...state.increment };
      if (action.base !== undefined) {
        increment.base = parseNum(action.base);
      }
      if (action.pips !== undefined) {
        increment.pips = parseNum(action.pips);
      }

      return { ...state, increment };
    }
    case "delete_spell": {
      return { ...state, _delete: true };
    }
    default: {
      throw new Error("Error");
    }
  }
};
