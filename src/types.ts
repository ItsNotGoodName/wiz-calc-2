export type CharacterType = {
  percentModifier: number;
  flatDamage: number;
  buffs: [];
};
export type SpellType = {
  name: string;
  bases: number[];
  finalDamage: number[];
  character: CharacterType;
  enchantment?: number;
  increment?: {
    base: number;
    pips: number;
  };
};
