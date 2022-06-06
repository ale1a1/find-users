import { Fragment } from "react";
import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";

export function LoginPage() {
  return (
    <Fragment>
      <div className="bg-dark vh-100">
        <div className="container pt-5">
          <h3 className="text-light mt-5 mb-5">FIND USERS WEB APPLICATION</h3>
          <ul>
            <h5 className="text-light mt-3">
              Find Users Web Application is a handy app that allows you to find
              all the registered Users and get in touch with them !
            </h5>
            <h5 className="text-light mt-3">
              Register to our app and login to get things started !
            </h5>
          </ul>
          <div className="container mt-5">
            <button
              className="btn btn-outline-warning mt-5 me-2"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
              aria-controls="login"
            >
              LOGIN
            </button>
            <button
              className="btn btn-outline-success mt-5"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#registerModal"
              aria-controls="register"
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>
      {/* <LoginModal loggingUser={props.loggingUser} /> */}
      <LoginModal />
      <RegisterModal />
    </Fragment>
  );
}
