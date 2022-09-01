import { Fragment } from "react";
import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";

export function LoginPage(props) {
  return (
    <Fragment>
      <div className="container loginPageMainContent mx-auto pt-5 pb-5">
        <h1 className="mt-5 mb-5 fw-bold text-warning loginPageHeader">
          FIND USERS WEB APPLICATION
        </h1>
        <h2 className="text-light mt-5 fs-2">
          A handy app to find Users and get in touch with them.
        </h2>
        <h2 className="text-light mt-5 fs-2">
          Register to our app and login to get things started.
        </h2>
        <div className="loginPageButtons">
          <button
            className="btn btn-lg btn-outline-warning mx-5"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
            aria-controls="login"
          >
            LOGIN
          </button>
          <button
            className="btn btn-lg btn-outline-success mx-5"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
            aria-controls="register"
          >
            REGISTER
          </button>
        </div>
      </div>
      {/* <LoginModal loggingUser={props.loggingUser} /> */}
      <LoginModal
        isLoggedIn={props.isLoggedIn}
        loginHandler={props.loginHandler}
      />
      <RegisterModal
        isLoggedIn={props.isLoggedIn}
        loginHandler={props.loginHandler}
      />
    </Fragment>
  );
}
