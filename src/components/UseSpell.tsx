import React from "react";
import { MAX_SPELL_DAMAGE } from "../constants";
import { CharacterType, SpellType } from "../types";
import { calculateDamage } from "../utils/calculateDamage";

export type SpellActions =
  | {
      type: "change_name";
      name: string;
    }
  | {
      type: "change_base";
      index: number;
      value: string;
    };

const spellReducer = (state: SpellType, action: SpellActions): SpellType => {
  switch (action.type) {
    case "change_name": {
      return { ...state, name: action.name };
    }
    case "change_base": {
      const newState = { ...state };

      const value = parseInt(action.value);

      if (!value) {
        newState.bases[action.index] = 0;
        newState.finalDamage[action.index] = 0;
      } else if (value > MAX_SPELL_DAMAGE) {
        newState.bases[action.index] = MAX_SPELL_DAMAGE;
        newState.finalDamage[action.index] = calculateDamage(
          MAX_SPELL_DAMAGE,
          state.character.percentModifier,
          state.character.flatDamage,
          state.character.buffs
        );
      } else {
        newState.bases[action.index] = value;
        newState.finalDamage[action.index] = calculateDamage(
          value,
          state.character.percentModifier,
          state.character.flatDamage,
          state.character.buffs
        );
      }
      return newState;
    }
    default: {
      throw new Error("Error");
    }
  }
};

export const useSpell = ({ character }: { character: CharacterType }) => {
  const initState: SpellType = {
    name: "",
    bases: [0],
    finalDamage: [0],
    character,
  };
  return React.useReducer(spellReducer, initState);
};
