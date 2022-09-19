import React from "react";
import { Fragment, useState } from "react";

import "../../style.css";

export function ForgotPasswordModal1() {
  const [email, setEmail] = useState();

  const forgotPassword = () => {};

  const closeHandler = () => {
    setEmail("");
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="forgotPasswordModal1"
        tabIndex="-1"
        aria-labelledby="loginLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog loginModal">
          <div className="modal-content loginModalBox">
            <div className="modal-header loginModalHeader">
              <h4 className="modal-title" id="getOfferLabel">
                FORGOT PASSWORD
              </h4>
            </div>
            <div className="modal-body">
              <form
                onSubmit={function (e) {
                  forgotPassword();
                  closeHandler();
                  e.preventDefault();
                }}
              >
                <div className="mb-3">
                  <label className="col-form-label cssBold">
                    email address
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white"
                    name="email address"
                    placeholder="Insert your email address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className="modal-footer loginModalFooter">
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
