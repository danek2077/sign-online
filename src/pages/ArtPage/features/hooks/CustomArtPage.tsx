import React from "react";


export const inputHandler = () => {
  const [valueInput, setValueInput] = React.useState<string>("");
  const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };
  return { valueInput, setValueInput, changeFunc };
};

