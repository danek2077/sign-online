import React from "react";
import { useDispatch } from "react-redux";
type TodoNomPropsType = { chooseList: string[] };
const TodoNomList: React.FC<TodoNomPropsType> = ({ chooseList }) => {
  const dispatch = useDispatch();
  function func(key: number) {
    console.log(key);
  }
  if(!chooseList){
    return(<div>ERROR: roomNumber don't exist, try another room</div>)
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

      {chooseList[0] ? <button>set</button> : ""}
    </div>
  );
};

export default TodoNomList;
