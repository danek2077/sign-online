import React from "react";
import { useDispatch } from "react-redux";
import { changeFlag, timeNow } from "../../../../store/Slices/FirstSlice";
export const inputHandler = () => {
  const [valueInput, setValueInput] = React.useState<string>("");
  const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };
  return { valueInput, setValueInput, changeFunc };
};

export const chosenUserData = () => {
  const dispatch = useDispatch();
  const [userChosen, setUserChosen] = React.useState<null | number>(null);
  function booleanUserChosen() {
    dispatch(changeFlag());
    dispatch(timeNow());
  }
  return { booleanUserChosen, userChosen, setUserChosen };
};
