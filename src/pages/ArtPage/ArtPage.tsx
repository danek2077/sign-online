import React from "react";
import { Link } from "react-router-dom";
import { inputHandler } from "./features/hooks/CustomArtPage";
import { UserListType } from "./features/types/typeArtPage";
import TodoNomList from "./features/childElems/TodoNomList";
import NewUserTable from "./features/childElems/NewUserTable";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
const ArtPage = () => {
  const todoUsers = useSelector(
    (state: RootState) => state.FirstSlice.todoUsers
  );
  const { changeFunc, valueInput } = inputHandler();
  const [chooseList, setChooseList] = React.useState<string[]>([""]);
  const roomUsersList: UserListType = {
    1: ["Vladimir", "Xavier", "Alex"],
    2: ["Vika", "biba"],
    3: ["Danek", "Vadim", "Master"],
  };
  const [sumRoomUsersList, setSumRoomUsersList] = React.useState<null | number>(
    null
  );
  const buttonRequest = () => {
    setChooseList(roomUsersList[Number(valueInput)]);
    setSumRoomUsersList(Number(valueInput));
  };
  return (
    <div>
      <Link to="/">RENTRER</Link>
      <br />
      <br />
      <input
        value={valueInput}
        onChange={changeFunc}
        placeholder="RoomNUM"
        size={6}
        type="text"
      />
      <button onClick={buttonRequest}>request</button>
      <br />
      <br />
      {chooseList ? (
        chooseList[0] && (
          <TodoNomList
            chooseList={chooseList}
            valueInput={valueInput}
            setChooseList={setChooseList}
          />
        )
      ) : (
        <div>
          ERROR: cannot find roomNUM "{sumRoomUsersList}" <br /> try to use from
          1 to {Object.keys(roomUsersList).length}
        </div>
      )}
      <br />
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>NAME</th>
            <th>RoomNUM</th>
            <th>BEGIN</th>
            <th>FINISH</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Daniel Stanislaw</th>
            <th>73</th>
            <th>12/03 20:00:32</th>
            <th>12/03 21:00:54</th>
          </tr>
        </tbody>
        {todoUsers.map((el, key) => (
          <NewUserTable key={key} valueInput={el.name} roomNum={el.roomNum} />
        ))}
      </table>
    </div>
  );
};

export default ArtPage;
