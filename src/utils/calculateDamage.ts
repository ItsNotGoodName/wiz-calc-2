export const calculateDamage = (
  base: number,
  percent: number,
  flat: number,
  buffs: number[]
) => {
  let dam = Math.floor(
    (1 + Number(percent) / 100) * Number(base) + Number(flat)
  );
  for (let i = 0; i < buffs.length; i++) {
    dam *= 1 + buffs[i] / 100;
    dam = Math.floor(dam);
  }
  return dam;
};
