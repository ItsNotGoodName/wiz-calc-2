import React from "react";
import { CharacterType, SpellType } from "../types";

export type CharacterActions = { type: "" };

const characterReducer = (
  state: CharacterType,
  action: CharacterActions
): CharacterType => {
  switch (action.type) {
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
  };
  return React.useReducer(reducer, initState);
};
