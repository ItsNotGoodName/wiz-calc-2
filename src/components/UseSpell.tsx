import React, { useEffect } from "react";
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
    }
  | {
      type: "update_character";
      value: CharacterType;
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
        newState.damages[action.index] = calculateDamage(newState.character, 0);
      } else {
        if (value > MAX_SPELL_DAMAGE) {
          newState.bases[action.index] = MAX_SPELL_DAMAGE;
        } else {
          newState.bases[action.index] = value;
        }

        newState.damages[action.index] = calculateDamage(
          newState.character,
          newState.bases[action.index]
        );
      }
      return newState;
    }
    case "update_character": {
      const newState = { ...state };
      newState.character = action.value;

      for (let i = 0; i < newState.bases.length; i++) {
        newState.damages[i] = calculateDamage(
          newState.character,
          newState.bases[i]
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
    damages: [0],
    character,
  };
  const hook = React.useReducer(spellReducer, initState);

  // Update character when it changes
  const [, dispatch] = hook;
  useEffect(() => {
    dispatch({ type: "update_character", value: character });
  }, [character, dispatch]);

  return hook;
};
