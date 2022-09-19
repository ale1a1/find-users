import React from "react";

export function RegisterVerificationModal(props) {
  const registerVerificationModalSwitcher = () => {
    const registerVerificationModal = document.querySelector(
      ".registerVerificationModal"
    );
    registerVerificationModal.classList.toggle("showModal");
  };

  const continueClick = () => {
    registerVerificationModalSwitcher();
    document.getElementById("forgotPasswordForm").submit();
  };

  return (
    <div className="registerVerificationModal">
      <div className="registerVerificationModalBox">
        <h1>CHECK YOUR EMAIL BOX</h1>
        <p>
          We sent a link to{" "}
          <em>
            <b>{props.emailForRegVerification}</b>
          </em>{" "}
          for verifying the email address
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
