import { Fragment, useState, useEffect } from "react";

import "../../style.css";

export function MainPage(props) {
  const [loader, setLoader] = useState(true);

  const loaderFunct = () => {
    setLoader(false);
  };

  useEffect(() => {
    setTimeout(loaderFunct, 1000);
  }, []);

  return loader ? (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  ) : (
    <Fragment>
      <div className="container mainPageMainContent text-light pt-5">
        <h1 className="mb-5  mainPageHeader">HOME PAGE</h1>
        <ul className="mt-5 fs-6 mainPageList">
          <li className="mt-3">
            <div className="d-flex align-items-center li-text-mainPage fs-2">
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
            <div className="d-flex align-items-center li-text-mainPage fs-2">
              <a href="users" className="iconMainPage">
                <ion-icon name="file-tray-full-outline" size="large"></ion-icon>
              </a>
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
            <div className="d-flex align-items-center li-text-mainPage fs-2">
              <a href="favourites" className="iconMainPage">
                <ion-icon name="save-outline" size="large"></ion-icon>
              </a>
              Save your
              <a
                className="nav-link link-warning text-uppercase fw-bold"
                href="favourites"
              >
                Favourite Users
              </a>
            </div>
          </li>
          <li className="mt-3">
            <div className="d-flex align-items-center li-text-mainPage fs-2">
              <a href="profile" className="iconMainPage">
                <ion-icon name="person-outline" size="large"></ion-icon>
              </a>
              Update your
              <a
                className="nav-link link-warning text-uppercase fw-bold"
                href="profile"
              >
                Profile Details
              </a>
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
