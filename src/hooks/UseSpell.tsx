import React, { useContext, useEffect } from "react";
import { CharacterContext } from "../contexts/CharacterContext";
import { SpellsContext } from "../contexts/SpellsContext";
import { spellReducer } from "../reducers/spellReducer";
import { SpellType } from "../types";

export const useSpell = (spell: SpellType, index: number) => {
  const { dispatch: spellsDispatch } = useContext(SpellsContext);
  const { character } = useContext(CharacterContext);

  const [newSpell, dispatch] = React.useReducer(spellReducer, spell);

  // Update spell in the manager
  useEffect(() => {
    if (newSpell._delete === true) {
      spellsDispatch({ type: "delete_spell", index: index });
    } else {
      spellsDispatch({ type: "update_spell", index: index, spell: newSpell });
    }
  }, [newSpell, spellsDispatch, index]);

  // Calculate spell
  useEffect(() => {
    dispatch({ type: "calculate", character });
  }, [character, newSpell.bases, newSpell.enchantment, newSpell.increment]);

  return dispatch;
};
