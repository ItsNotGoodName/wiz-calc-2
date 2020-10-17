import React from "react";
import { SpellType } from "../types";

type actionTypes =
  | {
      type: "change_name";
      name: string;
    }
  | {
      type: "change_base";
      index: number;
      value: number;
    };

const spellReducer = (state: SpellType, action: actionTypes): SpellType => {
  switch (action.type) {
    case "change_name": {
      return { ...state, name: action.name };
    }
    case "change_base": {
      const bases = [...state.bases];
      bases[action.index] = action.value;
      state.bases = bases;
      return state;
    }
    default: {
      throw new Error("Error");
    }
  }
};
const useSpell = ({ reducer = spellReducer } = {}) => {
  const initState: SpellType = { name: "", bases: [0] };
  return React.useReducer(reducer, initState);
};
export { useSpell, spellReducer };
