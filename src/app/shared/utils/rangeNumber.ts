export const rangeNumber = (start: number, end: number) =>
  Array.from(Array(end - start + 1).keys())
    .map((x) => x + start)
    .sort((a, b) => b - a);
