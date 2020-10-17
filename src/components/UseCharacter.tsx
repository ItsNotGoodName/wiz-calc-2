import React from "react";
import { CharacterType } from "../types";
import { parseBuffs } from "../utils/parseBuffs";

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
      const value = parseInt(action.value);

      if (!value) {
        newState.percentModifier = 0;
      } else {
        newState.percentModifier = value;
      }

      return newState;
    }
    case "change_flat": {
      const newState = { ...state };
      const value = parseInt(action.value);

      if (!value) {
        newState.flatDamage = 0;
      } else {
        newState.flatDamage = value;
      }

      return newState;
    }
    case "change_buffs": {
      const newState = { ...state };
      const buffs = parseBuffs(action.value);

      newState.buffs = buffs;
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
    buffs: [],
    buffsRaw: "",
  };
  return React.useReducer(reducer, initState);
};
