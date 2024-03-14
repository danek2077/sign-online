import React from "react";
import { chosenUserData } from "../hooks/CustomArtPage";
import { useDispatch } from "react-redux";
import { userNumberChange } from "../../../../store/Slices/FirstSlice";
type TodoNomPropsType = { chooseList: string[] };
const TodoNomList: React.FC<TodoNomPropsType> = ({ chooseList }) => {
  const { booleanUserChosen } = chosenUserData();
  const dispatch = useDispatch();
  function func(key: number) {
    dispatch(userNumberChange(key + 1));
  }
  return (
    <div>
      {chooseList[0]
        ? chooseList.map((el, key) => (
            <div key={key}>
              <input
                type="radio"
                onClick={() => func(key)}
                name="drone"
                value={el}
              />
              <label htmlFor={el}>{el}</label>
            </div>
          ))
        : ""}
      {chooseList[0] ? <button onClick={booleanUserChosen}>set</button> : ""}
    </div>
  );
};

export default TodoNomList;
