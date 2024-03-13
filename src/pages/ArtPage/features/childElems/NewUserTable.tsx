import React from "react";
import { UserListType } from "../types/typeArtPage";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useDispatch } from "react-redux";
import { timeNow } from "../../../../store/Slices/FirstSlice";

const NewUserTable: React.FC<{
  valueInput: string;
  userList: UserListType;
}> = ({ valueInput, userList }) => {
  const userChosen = useSelector(
    (root: RootState) => root.FirstSlice.userChosen
  );
  const dispatch = useDispatch();
  const time = useSelector((root: RootState) => root.FirstSlice.time);
  const [flag, useFlag] = React.useState<boolean>(true);
  
  function func() {
    useFlag(false);
    dispatch(timeNow());
  }
  return (
    <tbody>
      <tr>
        <th>{userList[Number(valueInput)][Number(userChosen) - 1]}</th>
        <th>{valueInput}</th>
        <th>{time}</th>
        <th>
          {flag ? <button onClick={func}>fini</button> : <span>{time}</span>}
        </th>
      </tr>
    </tbody>
  );
};

export default NewUserTable;
