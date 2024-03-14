import React from "react";
import { useDispatch } from "react-redux";
import { changeFlag } from "../../../../store/Slices/FirstSlice";
export const inputHandler = () => {
  const [valueInput, setValueInput] = React.useState<number | string>("");
  const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(Number(e.target.value));
  };
  return { valueInput, setValueInput, changeFunc };
};

export const chosenUserData = () => {
  const dispatch = useDispatch();
  function booleanUserChosen() {
    dispatch(changeFlag());
  }
  return { booleanUserChosen };
};

export const getTimeNow = () => {
  const now = new Date();
  const hours = now.getHours();
  let minutes: string = String(now.getMinutes());
  let day: string = String(now.getDate());
  let month: string = String(now.getMonth() + 1);
  let seconds: string = String(now.getSeconds());
  if (Number(minutes) < 10) {
    minutes = "0" + minutes
  }
  if (Number(seconds) < 10) {
    seconds = "0" + seconds;
  }
  const rez = `${day}/${month} ${hours}:${minutes}:${seconds}`;
  return rez;
};
