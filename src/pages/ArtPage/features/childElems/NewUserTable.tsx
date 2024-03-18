import React from "react";
import { getTimeNow } from "../hooks/CustomArtPage";

const NewUserTable: React.FC<{
  valueInput: number | string;
  roomNum: number;
}> = ({ valueInput, roomNum }) => {
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
        <th>{valueInput}</th>
        <th>{roomNum}</th>
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
