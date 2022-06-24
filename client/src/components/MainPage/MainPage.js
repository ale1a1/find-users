import { Fragment } from "react";

import "../../style.css";

export function MainPage(props) {
  return (
    <Fragment>
      <div className="container text-light pt-5">
        <h3 className="mt-5 mb-5">FIND USERS WEB APPLICATION</h3>
        <ul className="highMarginTop fs-6 ">
          <li className="mt-3">
            <div className="d-flex align-items-center">
              Check the
              <a
                className="nav-link link-warning text-uppercase fw-bold"
                href="users"
              >
                Users List
              </a>
            </div>
          </li>
          <li className="mt-3">
            <div className="d-flex align-items-center">
              Retrieve
              <a
                className="nav-link link-warning text-uppercase fw-bold"
                href="users"
              >
                Users Informations
              </a>
            </div>
          </li>
          <li className="mt-3">
            <div className="d-flex align-items-center">
              Save your
              <a
                className="nav-link link-warning text-uppercase fw-bold"
                href="users"
              >
                Favourite Users
              </a>
            </div>
          </li>
          <li className="mt-3">
            <div className="d-flex align-items-center">
              Update
              <a
                className="nav-link link-warning text-uppercase fw-bold"
                href="users"
              >
                Your Profile Details
              </a>
            </div>
          </li>

          {/* <li>
            <h5 className="mt-3">
              Retrieve
              <button className="btn btn-sm">
                <a
                  className="nav-link link-warning text-uppercase h5"
                  href="users"
                >
                  Users
                </a>
              </button>
              informations
            </h5>
          </li>
          <li> 
            <h5 className="mt-3">
              Save your
              <button className="btn  btn-sm">
                <a
                  className="nav-link link-warning text-uppercase h5"
                  href="favourites"
                >
                  favourite Users
                </a>
              </button>
            </h5>
          </li> */}
          {/* <li>
            <h5 className="mt-3">
              Update
              <button className="btn  btn-sm">
                <a
                  className="nav-link link-warning text-uppercase h5"
                  href="profile"
                >
                  your profile details
                </a>
              </button>
            </h5>
          </li> */}
        </ul>
      </div>
    </Fragment>
  );
}
