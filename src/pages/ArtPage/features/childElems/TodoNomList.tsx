import React from "react";
type TodoNomPropsType = { chooseList: string[] };
const TodoNomList: React.FC<TodoNomPropsType> = ({ chooseList }) => {
  return (
    <div>
      <input type="radio" name="name" value="dewey" />
      <label htmlFor="dewey">Dewey</label>
      <br />
      <input type="radio" name="name" />
    </div>
  );
};

export default TodoNomList;
