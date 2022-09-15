import React from "react";

import { LogoutRepository } from "../../libs/repository/LogoutRepository";

const logoutRepository = new LogoutRepository();

export function LogoutModal(props) {
  const logoutModalSwitcher = () => {
    const logoutModal = document.querySelector(".logoutModal");
    logoutModal.classList.toggle("showModal");
  };

  const logOut = () => {
    logoutRepository.remove();
    props.logoutHandler();
    logoutModalSwitcher();
  };

  return (
    <div className="logoutModal">
      <div className="logoutModalBox">
        <h1>LOGOUT</h1>
        <p>Are you sure you want to logout?</p>
        <a
          // onClick={logOut}
          className="modal-btn modal-btn-yes btn btn-outline-success btn-sm"
          href="/"
          role="button"
          onClick={logOut}
        >
          YES
        </a>
        <a
          // onClick={logOut}
          className="modal-btn modal-btn-no btn btn-outline-danger btn-sm"
          onClick={logoutModalSwitcher}
          role="button"
        >
          NO
        </a>
      </div>
    </div>
  );
}
