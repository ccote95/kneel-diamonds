//set up the transient state
const transientState = {
  metalId: "",
  sizeId: 0,
  styleId: "",
};

export const setMetalOption = (chosenMetal) => {
  transientState.metalId = chosenMetal;
  console.log(transientState);
};

export const setSizeOption = (chosenSize) => {
  transientState.sizeId = chosenSize;
  console.log(transientState);
};

export const setStyleOption = (chosenStyle) => {
  transientState.styleId = chosenStyle;
  console.log(transientState);
};

export const saveOrderSubmission = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };
  const response = await fetch("http://localhost:8088/orders", postOptions);
  const customEvent = new CustomEvent("newOrderCreated");
  document.dispatchEvent(customEvent);
};
