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
    }
  | {
      type: "add_enchantment";
    }
  | {
      type: "change_enchantment";
      value: string;
    }
  | {
      type: "add_increment";
    }
  | {
      type: "change_increment";
      pips: string;
      base: string;
    };

const dpsCalc = (newState: SpellType, index: number) => {
  const enchantment = newState.enchantment ? newState.enchantment : 0;
  const increment = newState.increment
    ? newState.increment.base * newState.increment.pips
    : 0;
  newState.damages[index] = calculateDamage(
    newState.character,
    newState.bases[index] + enchantment + increment
  );
  return newState;
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
      } else if (value > MAX_SPELL_DAMAGE) {
        newState.bases[action.index] = MAX_SPELL_DAMAGE;
      } else {
        newState.bases[action.index] = value;
      }

      dpsCalc(newState, action.index);
      return newState;
    }
    case "update_character": {
      const newState = { ...state };
      newState.character = action.value;

      for (let i = 0; i < newState.bases.length; i++) {
        dpsCalc(newState, i);
      }

      return newState;
    }
    case "add_enchantment": {
      const newState = { ...state };
      newState.enchantment = 0;
      return newState;
    }
    case "change_enchantment": {
      const newState = { ...state };
      newState.enchantment = parseInt(action.value);
      return newState;
    }
    case "add_increment": {
      const newState = { ...state };
      newState.increment = {
        base: 0,
        pips: 0,
      };
      return newState;
    }
    case "change_increment": {
      const newState = { ...state };
      newState.increment = {
        base: parseInt(action.base),
        pips: parseInt(action.pips),
      };
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
