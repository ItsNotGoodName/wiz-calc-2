import React, { createContext, useEffect, useReducer } from "react";
import { SpellsAction, spellsReducer } from "../reducers/spellsReducer";
import { SpellType } from "../types";

export const SpellsContext = createContext<{
  spells: SpellType[];
  dispatch: React.Dispatch<SpellsAction>;
}>({ spells: [], dispatch: () => null });

export const SpellsContextProvider: React.FC = ({ children }) => {
  const [spells, dispatch] = useReducer(spellsReducer, []);

  // Load spells from storage
  useEffect(() => {
    const spells_raw = localStorage.getItem("spells");
    if (spells_raw) {
      const spells_parsed: SpellType[] = JSON.parse(spells_raw);
      dispatch({ type: "load", spells: spells_parsed });
    }
  }, []);

  // Save spells to storage
  useEffect(() => {
    localStorage.setItem("spells", JSON.stringify(spells));
  }, [spells]);

  return (
    <SpellsContext.Provider value={{ spells, dispatch }}>
      {children}
    </SpellsContext.Provider>
  );
};
