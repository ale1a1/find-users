import React from "react";

export function ForgotPasswordModal2() {
  const forgotPasswordModal2Switcher = () => {
    const forgotPasswordModal2 = document.querySelector(
      ".forgotPasswordModal2"
    );
    forgotPasswordModal2.classList.toggle("showModal");
  };

  const continueClick = () => {
    forgotPasswordModal2Switcher();
  };

  return (
    <div className="forgotPasswordModal2">
      <div className="forgotPasswordModal2Box">
        <h1>SAVED !</h1>
        <p>
          Click <em>continue</em> to close this window
        </p>
        <a
          className="modal-btn modal-btn-yes btn btn-outline-warning btn-sm"
          role="button"
          onClick={continueClick}
        >
          Continue
        </a>
      </div>
    </div>
  );
}
