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
        <h1>Profile successfully updated!</h1>
        <p>
          Click <em>'Continue'</em> to close this window
        </p>
        <a
          className="modal-btn modal-btn-yes btn btn-outline-success btn-sm"
          role="button"
          onClick={continueClick}
        >
          Continue
        </a>
      </div>
    </div>
  );
}
