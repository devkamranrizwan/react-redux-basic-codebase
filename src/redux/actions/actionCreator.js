const actionCreatorWithPayload = (type, payload) => {
  return { type, payload };
};
const actionCreatorWithoutPayload = (type) => {
  return { type };
};

export { actionCreatorWithPayload, actionCreatorWithoutPayload };
