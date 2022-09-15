import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "../Navbar/Navbar";
import { LoginPage } from "../LoginPage/LoginPage";
import { MainPage } from "../MainPage/MainPage";
import { UsersList } from "../UsersList/UsersList";
import { FavouriteUsers } from "../FavouriteUsers/FavouriteUsers";
import { MyProfile } from "../MyProfile/MyProfile";
import { Footer } from "../Footer/Footer";
import { LogoutModal } from "../Navbar/LogoutModal";

import { LoginRepository } from "../../libs/repository/LoginRepository";

import "../../style.css";

const loginRepository = new LoginRepository();

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const loaderSwitcher = (parameter) => {
    setLoading(parameter);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
    console.log(loading);
    window.location.reload(false);
  };

  useEffect(() => {
    if (loginRepository.list()[0]) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const home = isLoggedIn ? (
    <MainPage logoutHandler={logoutHandler} />
  ) : (
    <LoginPage
      isLoggedIn={isLoggedIn}
      loginHandler={loginHandler}
      loaderSwitcher={loaderSwitcher}
    />
  );

  const navBar = isLoggedIn ? (
    <Navbar logoutHandler={logoutHandler} />
  ) : (
    <Navbar hidden="d-none " logoutHandler={logoutHandler} />
  );

  return (
    <Fragment>
      {navBar}
      <div className="main-content">
        {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <Router>
            <Routes>
              <Route path="" element={home}></Route>
              <Route
                path="/users"
                element={
                  <UsersList
                    logoutHandler={logoutHandler}
                    loaderSwitcher={loaderSwitcher}
                  />
                }
              ></Route>
              <Route
                path="/favourites"
                element={
                  <FavouriteUsers
                    logoutHandler={logoutHandler}
                    loaderSwitcher={loaderSwitcher}
                  />
                }
              ></Route>
              <Route
                path="/profile"
                element={
                  <MyProfile
                    logoutHandler={logoutHandler}
                    loaderSwitcher={loaderSwitcher}
                  />
                }
              ></Route>
            </Routes>
          </Router>
        )}
      </div>
      <Footer />
      <LogoutModal logoutHandler={logoutHandler} />
    </Fragment>
  );
}

//ignore this comment//
