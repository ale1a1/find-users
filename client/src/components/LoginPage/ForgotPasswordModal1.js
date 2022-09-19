import React from "react";
import { Fragment, useState } from "react";

import "../../style.css";

export function ForgotPasswordModal1() {
  const [email, setEmail] = useState();

  const closeHandler = () => {
    setEmail("");
  };

  const forgotPasswordModal2Switcher = () => {
    const forgotPasswordModal2 = document.querySelector(
      ".forgotPasswordModal2"
    );
    forgotPasswordModal2.classList.toggle("showModal");
  };

  const forgotPassword = () => {
    closeHandler();
    forgotPasswordModal2Switcher();
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="forgotPasswordModal1"
        tabIndex="-1"
        aria-labelledby="forgotPassword1Label"
        aria-hidden="true"
      >
        <div className="modal-dialog forgotPasswordModal1">
          <div className="modal-content forgotPasswordModal1Box">
            <div className="modal-header forgotPasswordModal1Header">
              <h4 className="modal-title">FORGOT PASSWORD</h4>
            </div>
            <div className="modal-body">
              <form
                onSubmit={function (e) {
                  forgotPassword();
                  e.preventDefault();
                }}
              >
                <div className="mb-3">
                  <label className="col-form-label cssBold">
                    email address
                  </label>
                  <input
                    type="email"
                    className="form-control bg-dark text-white"
                    name="email address"
                    placeholder="Insert your email address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className="modal-footer forgotPasswordModal1Footer">
                  <button
                    className="btn btn-outline-danger mt-2"
                    type="button"
                    data-bs-dismiss="modal"
                    onClick={closeHandler}
                  >
                    Close
                  </button>
                  <button
                    className="btn btn-outline-warning mt-2"
                    type="submit"
                    // data-bs-dismiss="modal"
                  >
                    CONTINUE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
