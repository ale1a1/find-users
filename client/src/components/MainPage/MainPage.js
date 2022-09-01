import { Fragment } from "react";

import "../../style.css";

export function MainPage(props) {
  return (
    <Fragment>
      <div className="container mainPageMainContent text-light pt-5">
        <h1 className="mt-5 mb-5 fw-bold mainPageHeader">
          FIND USERS WEB APPLICATION
        </h1>
        <ul className="mt-5 fs-6 mainPageList">
          <li className="mt-3">
            <div className="d-flex align-items-center fs-2">
              <a href="users" className="iconMainPage">
                <ion-icon name="search-outline" size="large"></ion-icon>
              </a>
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
            <div className="d-flex align-items-center fs-2">
              <ion-icon name="file-tray-full-outline" size="large"></ion-icon>
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
            <div className="d-flex align-items-center fs-2">
              <ion-icon name="save-outline" size="large"></ion-icon>
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
            <div className="d-flex align-items-center fs-2">
              <ion-icon name="person-outline" size="large"></ion-icon>
              Update your
              <a
                className="nav-link link-warning text-uppercase fw-bold"
                href="users"
              >
                Profile Details
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
