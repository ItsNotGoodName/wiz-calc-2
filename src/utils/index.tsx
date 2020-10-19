import { v4 } from "uuid";
import { CharacterType, SpellType } from "../types";

export const parseBuffs = (text: string) => {
  let buffs = text.split("\n");
  return buffs.map((element) => {
    const b = parseInt(element.split(" ")[0]);
    if (!b) {
      return 0;
    }
    return b;
  });
};

export const parseNum = (num: string) => {
  const value = parseInt(num);
  return value ? value : 0;
};

export const calculateAllSpell = (newState: SpellType) => {
  for (let i = 0; i < newState.bases.length; i++) {
    calculateSpell(newState, i);
  }
};

export const calculateSpell = (newState: SpellType, index: number) => {
  const enchantment = newState.enchantment ? newState.enchantment : 0;
  const increment = newState.increment
    ? newState.increment.base * newState.increment.pips
    : 0;
  newState.damages[index] = calculateDamage(
    newState.character,
    newState.bases[index] + enchantment + increment
  );
  return newState;
};

export const calculateDamage = (character: CharacterType, base: number) => {
  const { percentModifier, flatDamage, buffs } = character;
  let dam = Math.floor(
    (1 + Number(percentModifier) / 100) * Number(base) + Number(flatDamage)
  );
  for (let i = 0; i < buffs.length; i++) {
    dam *= 1 + buffs[i] / 100;
    dam = Math.floor(dam);
  }
  return dam;
};

export const newSpell = (): SpellType => ({
  id: v4(),
  name: "Untitled",
  bases: [0],
  damages: [0],
  character: {
    percentModifier: 0,
    flatDamage: 0,
    pierce: 0,
    buffs: [],
    buffsRaw: "",
    shields: [],
    sheldsRaw: "",
  },
});
