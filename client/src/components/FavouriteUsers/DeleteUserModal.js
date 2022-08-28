import React from "react";

import { LogoutRepository } from "../../libs/repository/LogoutRepository";

// const logoutRepository = new LogoutRepository();

export function DeleteUserModal(props) {
  const deleteFav = () => {
    props.deleteFavModalSwitcher();
    props.onRemove(props.user);
  };

  return (
    <div className="deleteFavModal ">
      <div className="deleteFavModalBox">
        <h1>REMOVE FAVOURITE</h1>
        <p>
          Remove <b>{props.user.name}</b> from your favourites?
        </p>
        <a
          // onClick={logOut}
          className="modal-btn modal-btn-yes btn btn-primary btn-sm"
          role="button"
          onClick={deleteFav}
        >
          YES
        </a>
        <a
          // onClick={logOut}
          className="modal-btn modal-btn-no btn btn-danger btn-sm"
          onClick={props.deleteFavModalSwitcher}
          role="button"
        >
          NO
        </a>
      </div>
    </div>
  );
}