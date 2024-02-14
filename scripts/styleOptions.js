import { setStyleOption } from "./TransientState.js";

export const StyleOptions = async () => {
  document.addEventListener("change", handleStyleChange);
  const response = await fetch("http://localhost:8088/styles");
  const styleOptions = await response.json();

  let styleHTML = "";
  const styleStringArray = styleOptions.map((style) => {
    return `<div>
        <input type= "radio" name="style" value = '${style.id}'</> ${style.style}</div>`;
  });
  styleHTML += styleStringArray.join("");

  return styleHTML;
};

const handleStyleChange = (changeEvent) => {
  if (changeEvent.target.name === "style") {
    const styleChoice = parseInt(changeEvent.target.value);
    setStyleOption(styleChoice);
  }
};
