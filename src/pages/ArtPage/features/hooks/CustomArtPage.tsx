import React from "react";
import { useDispatch } from "react-redux";
export const inputHandler = () => {
  const [valueInput, setValueInput] = React.useState<string>('');
  const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };
  return { valueInput, setValueInput, changeFunc };
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
  if(Number(month) < 10){
    month = "0" + month
  }
  const rez = `${day}/${month} ${hours}:${minutes}:${seconds}`;
  return rez;
};
