export type CharacterType = {
  percentModifier: number;
  flatDamage: number;
  pierce: number;
  buffs: number[];
  buffsRaw: string;
  shields: number[];
  sheldsRaw: string;
};
export type SpellType = {
  id: string;
  name: string;
  bases: number[];
  damages: number[];
  enchantment?: number;
  increment?: {
    base: number;
    pips: number;
  };
  _delete?: boolean;
};
