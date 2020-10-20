import React, { useContext, useEffect } from "react";
import { CharacterContext } from "../contexts/CharacterContext";
import { SpellsContext } from "../contexts/SpellsContext";
import { CharacterType, SpellType } from "../types";
import { calculateAllSpell, parseNum } from "../utils";

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
      type: "calculate";
      character: CharacterType;
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
    }
  | {
      type: "delete_spell";
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
      const bases = [...state.bases];
      bases[action.index] = parseNum(action.value);
      return { ...state, bases };
    }
    case "calculate": {
      const newState = { ...state };
      calculateAllSpell(newState, action.character);
      return newState;
    }
    case "toggle_enchantment": {
      const newState = { ...state };
      if (newState.enchantment === undefined) {
        newState.enchantment = 0;
      } else {
        newState.enchantment = undefined;
      }

      return newState;
    }
    case "change_enchantment": {
      const newState = { ...state };
      newState.enchantment = parseNum(action.value);

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

      return newState;
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

export const useSpell = (spell: SpellType, index: number) => {
  const { dispatch: spellsDispatch } = useContext(SpellsContext);
  const { character } = useContext(CharacterContext);

  const [newSpell, dispatch] = React.useReducer(spellReducer, spell);

  // Update spell in the manager
  useEffect(() => {
    if (newSpell._delete === true) {
      spellsDispatch({ type: "delete_spell", index: index });
    } else {
      spellsDispatch({ type: "update_spell", index: index, spell: newSpell });
    }
  }, [newSpell, spellsDispatch, index]);

  // Calculate spell
  useEffect(() => {
    dispatch({ type: "calculate", character });
  }, [character, newSpell.bases, newSpell.enchantment, newSpell.increment]);

  return dispatch;
};
