import { Fragment } from "react";
import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";
import './LoginPage.css';



export function LoginPage(props) {

  props.loaderSwitcher(true)

  const test = () => {
    props.loaderSwitcher(false)
  }

  setTimeout(test(), 1000)




  return (
      
    <Fragment>   
      <div>
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
          <div className="loginPageButtons mb-2">
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
          <div className="mt-5 p-2 text-light testCredentials">
            <hr className="text-warning"></hr>
            <h4 className="mt-4 text-warning">Test credentials</h4> 
            <div className="mt-3">
              <div className="d-flex gap-2">
                <span className="text-warning fw-bold">•</span>
                <p className="fw-bold">email address:</p>
                <span className="fst-italic">'userTEST@userTEST.com'</span>
              </div>
              <div className="d-flex gap-2"> 
                <span className="text-warning fw-bold">•</span>
                <p className="fw-bold">password:</p>
                <span className="fst-italic">'userTEST123'</span>
              </div>
            </div>                        
          </div>          
        </div>
        <LoginModal
          isLoggedIn={props.isLoggedIn}
          loginHandler={props.loginHandler}
          loaderSwitcher={props.loaderSwitcher}
        />
        <RegisterModal
          isLoggedIn={props.isLoggedIn}
          loginHandler={props.loginHandler}
        />
      </div> 
    </Fragment>
  );
}
