import React from "react";
import { useDispatch } from "react-redux";
import { TodoUserType, addTodoUser } from "../../../../store/Slices/FirstSlice";
type TodoNomPropsType = {
  chooseList: string[];
  valueInput: string;
  setChooseList: React.Dispatch<React.SetStateAction<string[]>>;
};
const TodoNomList: React.FC<TodoNomPropsType> = ({
  chooseList,
  valueInput,
  setChooseList,
}) => {
  const [alreadyChosenNum, setAlreadeChosenNum] = React.useState<number>(0);
  const dispatch = useDispatch();

  function func() {
    const result: TodoUserType = {
      name: chooseList[alreadyChosenNum],
      roomNum: Number(valueInput),
    };
    dispatch(addTodoUser(result));
    setChooseList([""]);
  }

  return (
    <div>
      {chooseList.map((el, key) => (
        <div key={key}>
          <input
            type="radio"
            onClick={() => setAlreadeChosenNum(key)}
            name="drone"
            value={el}
          />
          <label htmlFor={el}>{el}</label>
        </div>
      ))}
      {chooseList[0] ? <button onClick={func}>set</button> : ""}
    </div>
  );
};
export default TodoNomList;
