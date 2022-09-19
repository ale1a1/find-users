import { Fragment, useState } from "react";
import { UsersService } from "../../libs/UsersService";
import { LoginRepository } from "../../libs/repository/LoginRepository";

import { ForgotPasswordModal1 } from "./ForgotPasswordModal1";
import { ForgotPasswordModal2 } from "./ForgotPasswordModal2";

import "../../style.css";

const usersService = new UsersService();
const logingRepository = new LoginRepository();

export function LoginModal(props) {
  const [email, setEmail] = useState();
  const [emailForPasswordReset, setEmailForPasswordReset] = useState();

  const [password, setPassword] = useState();
  const [loginError, setLoginError] = useState("");

  const passwordResetEmail = (email) => {
    setEmailForPasswordReset(email);
  };

  const login = async (email, password) => {
    // props.loaderSwitcher(true);
    await usersService.loginUser(email, password).then((user) => {
      // props.loaderSwitcher(false);
      if (user.message !== "error") {
        props.loginHandler();
        logingRepository.save({ email: user.email, id: user.id });
      } else {
        setLoginError("Wrong password or wrong email. Try again!");
      }
    });
  };

  const closeHandler = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog loginModal">
          <div className="modal-content loginModalBox">
            <div className="modal-header loginModalHeader">
              <h4 className="modal-title" id="getOfferLabel">
                LOGIN
              </h4>
            </div>
            <div className="modal-body">
              <form
                onSubmit={function (e) {
                  login(email, password);
                  closeHandler();
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
                <div className="mb-3">
                  <label className="col-form-label cssBold">password</label>
                  <input
                    type="password"
                    className="form-control bg-dark text-white"
                    name="Password"
                    placeholder="Insert your password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>
                <div className="mb-3">
                  <p>{loginError}</p>
                </div>
                <div className="mb-3">
                  <a
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#forgotPasswordModal1"
                    aria-controls="forgotPassword"
                    className="forgotPassword"
                  >
                    Forgot password?
                  </a>
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
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ForgotPasswordModal1 passwordResetEmail={passwordResetEmail} />
      <ForgotPasswordModal2 email={emailForPasswordReset} />
    </Fragment>
  );
}
