import { Fragment, useState } from "react";

import { DeleteUserModal } from "../FavouriteUsers/DeleteUserModal";

import "../../style.css";

export function FavUsersList({
  users,
  onRemove,
  deleteFavModalSwitcher,
  handleCurrentUser,
}) {
  // const [currentUser, setCurrentUser] = useState("");
  const removeOptions = (user) => {
    deleteFavModalSwitcher();
    // setCurrentUser(user);
    handleCurrentUser(user);
  };
  const favs = users.map((user) => (
    <Fragment>
      <tr className="hoverTable" key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td className="right">
          <button
            // onClick={function () {
            //   onRemove(user);
            // }}
            // onClick={deleteFavModalSwitcher}
            onClick={function () {
              removeOptions(user);
            }}
            className="btn btn-outline-warning btn-sm"
          >
            remove
          </button>
        </td>
      </tr>
    </Fragment>
  ));
  return (
    <Fragment>
      {favs}
      {/* <DeleteUserModal
        user={currentUser}
        onRemove={onRemove}
        deleteFavModalSwitcher={deleteFavModalSwitcher}
      /> */}
    </Fragment>
  );
}
