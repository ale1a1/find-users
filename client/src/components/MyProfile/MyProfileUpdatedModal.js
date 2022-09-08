import React from "react";

export function MyProfileUpdatedModal() {
  const myProfileUpdatedModalSwitcher = () => {
    const myProfileUpdatedModal = document.querySelector(
      ".myProfileUpdatedModal"
    );
    myProfileUpdatedModal.classList.toggle("showModal");
  };
  const continueClick = () => {
    myProfileUpdatedModalSwitcher();
    document.getElementById("myForm").submit();
  };

  return (
    <div className="myProfileUpdatedModal">
      <div className="myProfileUpdatedModalBox">
        <h1>SAVED !</h1>
        <p>
          Click <em>continue</em> to close this window
        </p>
        <a
          className="modal-btn modal-btn-yes btn btn-outline-primary btn-sm"
          role="button"
          onClick={continueClick}
        >
          Continue
        </a>
      </div>
    </div>
  );
}
