import React from "react";

export function ForgotPasswordModal2(props) {
  const forgotPasswordModal2Switcher = () => {
    const forgotPasswordModal2 = document.querySelector(
      ".forgotPasswordModal2"
    );
    forgotPasswordModal2.classList.toggle("showModal");
  };

  const continueClick = () => {
    forgotPasswordModal2Switcher();
    document.getElementById("forgotPasswordForm").submit();
  };

  return (
    <div className="forgotPasswordModal2">
      <div className="forgotPasswordModal2Box">
        <h1>CHECK YOUR EMAIL BOX</h1>
        <p>
          Click on the link that we sent to{" "}
          <em>
            <b>{props.email}</b>
          </em>{" "}
          to reset the password
        </p>
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
