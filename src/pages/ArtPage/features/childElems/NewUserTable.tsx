import React from "react";
import { UserListType } from "../types/typeArtPage";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { getTimeNow } from "../hooks/CustomArtPage";

const NewUserTable: React.FC<{
  valueInput: number | string;
  userList: UserListType;
}> = ({ valueInput, userList }) => {
  const selectedUser = useSelector(
    (root: RootState) => root.FirstSlice.selectedUser
  );
  const [timeNow] = React.useState<string>(String(getTimeNow()));
  const [flag, useFlag] = React.useState<boolean>(true);
  const [timeNowSecond, setTimeNowSecond] = React.useState<string>(
    String(getTimeNow())
  );
  function func() {
    useFlag(false);
    setTimeNowSecond(getTimeNow());
  }
  return (
    <tbody>
      <tr>
        <th>{userList[Number(valueInput)][Number(selectedUser) - 1]}</th>
        <th>{valueInput}</th>
        <th>{timeNow}</th>
        <th>
          {flag ? (
            <button onClick={func}>fini</button>
          ) : (
            <span>{timeNowSecond}</span>
          )}
        </th>
      </tr>
    </tbody>
  );
};

export default NewUserTable;
