import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "../Navbar/Navbar";
import { LoginPage } from "../LoginPage/LoginPage";
import { MainPage } from "../MainPage/MainPage";
import { UsersList } from "../UsersList/UsersList";
import { FavouriteUsers } from "../FavouriteUsers/FavouriteUsers";
import { MyProfile } from "../MyProfile/MyProfile";
import { Footer } from "../Footer/Footer";

import { LoginRepository } from "../../libs/repository/LoginRepository";

import "../../style.css";

const loginRepository = new LoginRepository();

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
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
    <LoginPage isLoggedIn={isLoggedIn} loginHandler={loginHandler} />
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
        <Router>
          <Routes>
            <Route path="" element={home}></Route>
            <Route
              path="/users"
              element={<UsersList logoutHandler={logoutHandler} />}
            ></Route>
            <Route
              path="/favourites"
              element={<FavouriteUsers logoutHandler={logoutHandler} />}
            ></Route>
            <Route
              path="/profile"
              element={<MyProfile logoutHandler={logoutHandler} />}
            ></Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </Fragment>
  );
}

//ignore this comment//
