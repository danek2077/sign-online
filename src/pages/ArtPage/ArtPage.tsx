import React from "react";
import { Link } from "react-router-dom";
import { inputHandler } from "./features/hooks/CustomArtPage";
import { UserListType } from "./features/types/typeArtPage";
import TodoNomList from "./features/childElems/TodoNomList";
import NewUserTable from "./features/childElems/NewUserTable";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
const ArtPage = () => {
  const flag = useSelector((root: RootState) => root.FirstSlice.flag);
  const { changeFunc, valueInput } = inputHandler();
  const [chooseList, setChooseList] = React.useState<string[]>([""]);
  const userList: UserListType = {
    1: ["Vladimir", "Xavier", "Alex"],
    2: ["Vika", "biba"],
    3: ["Danek", "Vadim", "Master"],
  };
  const buttonRequest = () => {
    setChooseList(userList[Number(valueInput)]);
  };
  return (
    <div>
      <Link to="/">RENTRER</Link>
      <br />
      <br />
      <div>try number 1 or 2 or 3</div>
      <input value={valueInput} onChange={changeFunc} size={1} type="text" />
      <button onClick={buttonRequest}>request</button>
      <br />
      <br />
      <TodoNomList chooseList={chooseList} />
      <br />
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>NOM</th>
            <th>CHAMBRE</th>
            <th>COMMMENCER</th>
            <th>FINI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Daniel Stanislaw</th>
            <th>73</th>
            <th>12/03 20:00</th>
            <th>12/03 21:00</th>
          </tr>
        </tbody>
        {flag && <NewUserTable valueInput={valueInput} userList={userList} />}
      </table>
    </div>
  );
};

export default ArtPage;
