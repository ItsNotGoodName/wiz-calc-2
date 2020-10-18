export type CharacterType = {
  percentModifier: number;
  flatDamage: number;
  buffs: number[];
  buffsRaw: string;
};
export type SpellType = {
  id: string;
  name: string;
  bases: number[];
  damages: number[];
  character: CharacterType;
  enchantment?: number;
  increment?: {
    base: number;
    pips: number;
  };
};
