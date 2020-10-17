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
