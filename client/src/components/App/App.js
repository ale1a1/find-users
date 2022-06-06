import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginPage } from "../LoginPage/LoginPage";
import { MainPage } from "../MainPage/MainPage";
import { UsersList } from "../UsersList/UsersList";
import { FavouriteUsers } from "../FavouriteUsers/FavouriteUsers";
import { MyProfile } from "../MyProfile/MyProfile";

import { LoginRepository } from "../../libs/repository/LoginRepository";

const loginRepository = new LoginRepository();

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const home = isLoggedIn ? (
    <MainPage logoutHandler={logoutHandler} />
  ) : (
    <LoginPage />
  );

  useEffect(() => {
    if (loginRepository.list()[0]) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <Fragment>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={home}></Route>
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
    </Fragment>
  );
}
