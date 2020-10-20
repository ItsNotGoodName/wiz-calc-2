import React, { createContext, useEffect, useReducer } from "react";
import {
  CharacterActions,
  characterReducer,
} from "../reducers/characterReducers";
import { CharacterType } from "../types";

const initState: CharacterType = {
  percentModifier: 0,
  flatDamage: 0,
  pierce: 0,
  buffs: [],
  buffsRaw: "",
  shields: [],
  sheldsRaw: "",
};

export const CharacterContext = createContext<{
  character: CharacterType;
  dispatch: React.Dispatch<CharacterActions>;
}>({ character: initState, dispatch: () => null });

export const CharacterContextProvider: React.FC = ({ children }) => {
  const [character, dispatch] = useReducer(characterReducer, initState);

  // Load character from storage
  useEffect(() => {
    const character_raw = localStorage.getItem("character");
    if (character_raw) {
      const character_parsed: CharacterType = JSON.parse(character_raw);
      dispatch({ type: "load", character: character_parsed });
    }
  }, []);

  // Save character to storage
  useEffect(() => {
    localStorage.setItem("character", JSON.stringify(character));
  }, [character]);

  return (
    <CharacterContext.Provider value={{ character, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};
