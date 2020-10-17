export type CharacterType = { percentModifier: number; flatDamage: number };
export type SpellType = {
  name: string;
  bases: number[];
  enchantment?: number;
  increment?: {
    base: number;
    pips: number;
  };
};
