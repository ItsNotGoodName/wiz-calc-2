import React, { createContext, useReducer } from "react";
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

  return (
    <CharacterContext.Provider value={{ character, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};
