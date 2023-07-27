export const stringToArray = (value: string): string[] => {
  const newValue = value.trim();
  return newValue ? newValue.split(' ') : [];
};

export const groupBy = <T>(arr: T[], fn: (item: T) => any, key: string) => {
  return arr.reduce<Record<string, T[]>>((prev, curr) => {
    const groupByValue = fn(curr);
    const group = prev[groupByValue] || [];
    group.push(curr);
    return { ...prev, [groupByValue]: group };
  }, {});
};
