import { CharacterType } from "../types";

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
