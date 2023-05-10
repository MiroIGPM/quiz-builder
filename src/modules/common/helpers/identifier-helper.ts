export const getUniqueIdentifier = (): number => {
  return Math.floor(Math.random() * 100) * Date.now();
};
