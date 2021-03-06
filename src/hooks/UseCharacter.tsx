import React from "react";
import { CharacterType } from "../types";
import { parseBuffs, parseNum } from "../utils";

export type CharacterActions =
  | { type: "change_percent"; value: string }
  | { type: "change_flat"; value: string }
  | {
      type: "change_buffs";
      value: string;
    };

const characterReducer = (
  state: CharacterType,
  action: CharacterActions
): CharacterType => {
  switch (action.type) {
    case "change_percent": {
      const newState = { ...state };
      newState.percentModifier = parseNum(action.value);
      return newState;
    }
    case "change_flat": {
      const newState = { ...state };
      newState.flatDamage = parseNum(action.value);

      return newState;
    }
    case "change_buffs": {
      const newState = { ...state };
      newState.buffs = parseBuffs(action.value);
      newState.buffsRaw = action.value;

      return newState;
    }
    default: {
      throw new Error("Error");
    }
  }
};

export const useCharacter = ({ reducer = characterReducer } = {}) => {
  const initState: CharacterType = {
    percentModifier: 0,
    flatDamage: 0,
    pierce: 0,
    buffs: [],
    buffsRaw: "",
    shields: [],
    sheldsRaw: "",
  };
  return React.useReducer(reducer, initState);
};
