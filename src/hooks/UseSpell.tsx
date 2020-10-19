import React, { useEffect } from "react";
import { CharacterType, SpellType } from "../types";
import { calculateAllSpell, calculateSpell, parseNum } from "../utils";

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
      type: "update_character";
      value: CharacterType;
    }
  | {
      type: "toggle_enchantment";
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
    };

const spellReducer = (state: SpellType, action: SpellActions): SpellType => {
  switch (action.type) {
    case "change_name": {
      return { ...state, name: action.name };
    }
    case "add_base": {
      const newState = { ...state };
      newState.bases.push(0);
      newState.damages.push(0);
      return newState;
    }
    case "change_base": {
      const newState = { ...state };
      newState.bases[action.index] = parseNum(action.value);

      calculateSpell(newState, action.index);
      return newState;
    }
    case "update_character": {
      const newState = { ...state };
      newState.character = action.value;

      calculateAllSpell(newState);
      return newState;
    }
    case "toggle_enchantment": {
      const newState = { ...state };
      if (newState.enchantment === undefined) {
        newState.enchantment = 0;
      } else {
        newState.enchantment = undefined;
      }

      calculateAllSpell(newState);
      return newState;
    }
    case "change_enchantment": {
      const newState = { ...state };
      newState.enchantment = parseNum(action.value);

      calculateAllSpell(newState);
      return newState;
    }
    case "toggle_increment": {
      const newState = { ...state };
      if (newState.increment === undefined) {
        newState.increment = {
          base: 0,
          pips: 1,
        };
      } else {
        newState.increment = undefined;
      }

      calculateAllSpell(newState);
      return newState;
    }
    case "change_increment": {
      const newState = { ...state };
      console.log(action);
      if (action.base !== undefined) {
        newState.increment!.base = parseNum(action.base);
      }
      if (action.pips !== undefined) {
        newState.increment!.pips = parseNum(action.pips);
      }

      calculateAllSpell(newState);
      return newState;
    }
    default: {
      throw new Error("Error");
    }
  }
};

export const useSpell = ({
  character,
  id,
}: {
  character: CharacterType;
  id: string;
}) => {
  const initState: SpellType = {
    id,
    name: "Untitled",
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