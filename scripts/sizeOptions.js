import { setSizeOption } from "./TransientState.js";

export const SizeOptions = async () => {
  document.addEventListener("change", handleSizeChange);
  const response = await fetch("http://localhost:8088/sizes");
  const sizeOptions = await response.json();

  let sizeHTML = "";
  const sizeStringArray = sizeOptions.map((caret) => {
    return `<div>
        <input type="radio" name = "size" value='${caret.id}'/> ${caret.carets}</div>`;
  });
  sizeHTML += sizeStringArray.join("");

  return sizeHTML;
};

const handleSizeChange = (changeEvent) => {
  if (changeEvent.target.name === "size") {
    const sizeChoice = parseInt(changeEvent.target.value);
    setSizeOption(sizeChoice);
  }
};
