import { SpellType } from "../types";
import { createSpell } from "../utils";

export type SpellsAction =
  | {
      type: "add_spell";
    }
  | {
      type: "delete_spell";
      id: string;
    }
  | {
      type: "update_spell";
      index: number;
      spell: SpellType;
    };
export const spellsReducer = (
  state: SpellType[],
  action: SpellsAction
): SpellType[] => {
  switch (action.type) {
    case "add_spell": {
      return [...state, createSpell()];
    }
    case "delete_spell": {
      const newState = [];

      for (let i = 0; i < state.length; i++) {
        if (state[i].id !== action.id) {
          newState.push(state[i]);
        }
      }

      return newState;
    }
    case "update_spell": {
      const newState = [...state];
      newState[action.index] = action.spell;

      return newState;
    }
    default: {
      throw new Error("Error");
    }
  }
};
