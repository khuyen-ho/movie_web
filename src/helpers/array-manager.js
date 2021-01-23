export const flatArray = (array) => {
  return (array = [].concat.apply([], array));
};
