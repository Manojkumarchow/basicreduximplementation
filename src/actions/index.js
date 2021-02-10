export const increment = (value) => {
  return {
    type: "increment",
    payload: value,
  };
};
export const decrement = (value) => {
  return {
    type: "decrement",
    payload: value,
  };
};
