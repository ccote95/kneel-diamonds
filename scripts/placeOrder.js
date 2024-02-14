import { saveOrderSubmission } from "./TransientState.js";

const handleOrderSubmission = (clickEvent) => {
  if (clickEvent.target.id === "saveOrder") {
    saveOrderSubmission();
  }
};

export const saveOrder = () => {
  document.addEventListener("click", handleOrderSubmission);
  return "<div><button id='saveOrder'>Place Order</button></div>";
};
