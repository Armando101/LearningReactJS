export const heavyProcess = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    console.log("There we go");
  }
  return `${cycles} cycles processed`;
};
