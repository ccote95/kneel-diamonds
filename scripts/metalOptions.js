import { setMetalOption } from "./TransientState.js";

export const MetalOptions = async () => {
  document.addEventListener("change", handleMetalChange);
  const response = await fetch("http://localhost:8088/metals");
  const metalOptions = await response.json();

  let optionsHTML = "";
  const divStringArray = metalOptions.map((metal) => {
    return `<div>
        <input type='radio' name = "metal" value =" ${metal.id}"/> ${metal.metal}</div>`;
  });
  optionsHTML += divStringArray.join("");
  return optionsHTML;
};

const handleMetalChange = (changeEvent) => {
  if (changeEvent.target.name === "metal") {
    const metalChoice = parseInt(changeEvent.target.value);
    setMetalOption(metalChoice);
  }
};
