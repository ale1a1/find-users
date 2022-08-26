import React from "react";

export function MyProfileUpdatedModal() {
  const myProfileUpdatedModalSwitcher = () => {
    const myProfileUpdatedModal = document.querySelector(
      ".myProfileUpdatedModal"
    );
    myProfileUpdatedModal.classList.toggle("show");
  };
  const continueClick = () => {
    myProfileUpdatedModalSwitcher();
    document.getElementById("myForm").submit();
  };

  return (
    <div className="myProfileUpdatedModal">
      <div className="myProfileUpdatedModalBox">
        <h1>SAVED!</h1>
        <p>Click continue to close this window</p>
        <a
          className="modal-btn modal-btn-yes btn btn-outline-dark btn-sm"
          role="button"
          onClick={continueClick}
        >
          CONTINUE
        </a>
      </div>
    </div>
  );
}
