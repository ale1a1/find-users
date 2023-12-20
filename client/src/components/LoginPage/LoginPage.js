import { Fragment } from "react";
import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";
import './LoginPage.css';

export function LoginPage(props) {
  return (
    <Fragment>
      <div className="container loginPageMainContent mx-auto pt-5 pb-5">
        <h1 className="mt-5 mb-5 fw-bold text-warning loginPageHeader">
          FIND USERS WEB APPLICATION
        </h1>
        <div className="container-h2">
          <h2 className="text-light mt-5 fs-2">
            A handy app to find Users and get in touch with them.
          </h2>
          <h2 className="text-light mt-5 fs-2">
            Register to our app and login to get things started.
          </h2>
        </div>
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
        <div className="border p-3 text-light d-flex flex-column mt-5">
          <p>Are you in a hurry or you prefer not to register yet ?!</p>
          <div>
            <div>Check out the app using the credentials below</div>            
            <div>
              <p className="fw-bold">email address: </p>
              <span>userTEST@userTEST.com</span>
            </div>
            <div>
              <p className="fw-bold">password: </p>
              <span>userTEST123</span>
            </div>                   
          </div>          
        </div>
      </div>
      {/* <LoginModal loggingUser={props.loggingUser} /> */}
      <LoginModal
        isLoggedIn={props.isLoggedIn}
        loginHandler={props.loginHandler}
        loaderSwitcher={props.loaderSwitcher}
      />
      <RegisterModal
        isLoggedIn={props.isLoggedIn}
        loginHandler={props.loginHandler}
      />
    </Fragment>
  );
}
