import React from "react";

import { LogoutRepository } from "../../libs/repository/LogoutRepository";

// const logoutRepository = new LogoutRepository();

export function DeleteUserModal(props) {
  const deleteFav = () => {
    props.deleteFavModalSwitcher();
    props.onRemove(props.user);
  };

  return (
    <div className="deleteFavModal">
      <div className="deleteFavModalBox">
        <h1>DELETE FAV</h1>
        <p>Are you sure you want to delete the user: {props.user.name}?</p>
        <a
          // onClick={logOut}
          className="modal-btn modal-btn-yes btn btn-outline-dark btn-sm"
          role="button"
          onClick={deleteFav}
        >
          YES, delete it
        </a>
        <a
          // onClick={logOut}
          className="modal-btn modal-btn-no btn btn-outline-dark btn-sm"
          onClick={props.deleteFavModalSwitcher}
          role="button"
        >
          NO, do not delete it
        </a>
      </div>
    </div>
  );
}
