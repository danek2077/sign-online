import React from "react";
import { Link } from "react-router-dom";
import { UserListType } from "./typeArtPage";
import { inputHandler } from "./CustomArtPage";
const ArtPage = () => {
  const { changeFunc, setValueInput, valueInput } = inputHandler();
  const [chooseList, setChooseList] = React.useState("");
  const [userList, setUserList] = React.useState({
    1: ["Vladimir", "Xavier", "Alex"],
    2: ["Vika", "biba"],
    3: ["Danek", "Vadim","Master"],
  });
  // const [userList, setUserList] = React.useState<UserListType[]>([
  //   {
  //     1: [{ name: "Vlad" }, { name: "Misha" }],
  //   },
  //   {
  //     2: [{ name: "Vika" }, { name: "biba" }],
  //   },
  //   { 3: [{ name: "Danek" }, { name: "Vadim" }] },
  // ]);
  const buttonRequest = () => {};
  console.log(userList[1]);
  return (
    <div>
      <Link to="/">RENTRER</Link>
      <br />
      <br />
      <input value={valueInput} onChange={changeFunc} size={1} type="text" />
      <button onClick={buttonRequest}>request</button>
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
      </table>
    </div>
  );
};

export default ArtPage;
