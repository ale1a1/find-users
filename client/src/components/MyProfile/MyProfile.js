import React, { Fragment, useState, useEffect } from "react";
import { MyProfileFormModal } from "./MyProfileFormModal";
import { LoginRepository } from "../../libs/repository/LoginRepository";
import { UsersService } from "../../libs/UsersService";

import "../../style.css";

const loginRepository = new LoginRepository();
const usersService = new UsersService();

export function MyProfile(props) {
  const [currentUser, setCurrentUser] = useState({});
  const [loader, setLoader] = useState(true);

  const retrievedUser = loginRepository.list();
  const currentUserEmail = { email: retrievedUser[0].email };

  const loaderFunct = () => {
    setLoader(false);
  };

  useEffect(() => {
    props.loaderSwitcher(true);
    usersService
      .getCurrentUser(currentUserEmail)
      .then((user) => setCurrentUser(user))
      .then(props.loaderSwitcher(false))
      .then(setTimeout(loaderFunct, 1000));
  }, []);

  const updateUser = () => {
    usersService
      .getCurrentUser(currentUserEmail)
      .then((user) => setCurrentUser(user));
  };

  const changeName = (name) => {
    setCurrentUser((prevState) => {
      return { ...prevState, name: name };
    });
    console.log(currentUser);
  };
  const changePhoneNumber = (number) => {
    setCurrentUser((prevState) => {
      return { ...prevState, phoneNumber: number };
    });
    console.log(currentUser);
  };

  return loader ? (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  ) : (
    <Fragment>
      <div className="container pt-5 profileMainContent">
        <h1 className="text-light mt-5 profileHeader usersListHeader">PROFILE</h1>
        <div className="container-profile">
          <div className="table-container table-container-profile">
            <table className="table myProfileTable text-light mt-5 mb-5">
              <tbody>
                <tr>
                  <th scope="col">Username</th>
                  <td>{currentUser.name}</td>
                </tr>
                <tr>
                  <th scope="col">Email address</th>
                  <td>{currentUser.email}</td>
                </tr>
                <tr>
                  <th scope="col">Phone number</th>
                  <td>{currentUser.phoneNumber}</td>
                </tr>
              </tbody>
            </table>
            <button
              className="btn btn-outline-warning btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#editProfileModal"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <MyProfileFormModal
        currentUser={currentUser}
        changeName={changeName}
        changePhoneNumber={changePhoneNumber}
        updateUser={updateUser}
        submitButton="Save changes"
        submitSwitcher="Edit"
      />
    </Fragment>
  );
}
