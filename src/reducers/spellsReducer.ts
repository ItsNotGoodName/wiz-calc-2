import { SpellType } from "../types";
import { newSpell } from "../utils";

export type SpellsAction =
  | {
      type: "add_spell";
    }
  | {
      type: "delete_spell";
      id: string;
    };
export const spellsReducer = (
  state: SpellType[],
  action: SpellsAction
): SpellType[] => {
  switch (action.type) {
    case "add_spell": {
      return [...state, newSpell()];
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
    default: {
      throw new Error("Error");
    }
  }
};
