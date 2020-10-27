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
  const value = parseFloat(num);
  return value ? value : 0;
};

export const calculateAllSpell = (
  newState: SpellType,
  character: CharacterType
) => {
  for (let i = 0; i < newState.bases.length; i++) {
    calculateSpell(newState, character, i);
  }
};

export const calculateSpell = (
  newState: SpellType,
  character: CharacterType,
  index: number
) => {
  const enchantment =
    newState.enchantment && newState.enchantment.enabled
      ? newState.enchantment.base
      : 0;
  const increment = newState.increment
    ? newState.increment.base * newState.increment.pips
    : 0;
  newState.damages[index] = calculateDamage(
    character,
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

export const createSpell = (): SpellType => ({
  id: v4(),
  name: "Untitled",
  bases: [0],
  damages: [0],
});
