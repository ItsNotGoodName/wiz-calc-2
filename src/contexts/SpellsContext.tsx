import React, { createContext, useEffect, useReducer } from "react";
import { SpellsAction, spellsReducer } from "../reducers/spellsReducer";
import { SpellType } from "../types";

export const SpellsContext = createContext<{
  spells: SpellType[];
  dispatch: React.Dispatch<SpellsAction>;
}>({ spells: [], dispatch: () => null });

export const SpellsContextProvider: React.FC = ({ children }) => {
  const [spells, dispatch] = useReducer(spellsReducer, []);
  useEffect(() => {
    dispatch({ type: "add_spell" });
  }, []);

  return (
    <SpellsContext.Provider value={{ spells, dispatch }}>
      {children}
    </SpellsContext.Provider>
  );
};
