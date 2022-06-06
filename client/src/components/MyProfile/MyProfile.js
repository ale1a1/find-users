import React, { Fragment, useState, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { MyProfileFormModal } from "./MyProfileFormModal";
import { LoginRepository } from "../../libs/repository/LoginRepository";
import { UsersService } from "../../libs/UsersService";

const loginRepository = new LoginRepository();
const usersService = new UsersService();

export function MyProfile(props) {
  const [currentUser, setCurrentUser] = useState({});
 

  useEffect(() => {
    const currentUser = loginRepository.list();
    const currentUserEmail = { email: currentUser[0] };
    usersService
      .getCurrentUser(currentUserEmail)
      .then((user) => setCurrentUser(user));
  }, []);

  const updateUser = (updatedUser) => {
    setCurrentUser(updatedUser);
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

  return (
    <Fragment>
      <Navbar logoutHandler={props.logoutHandler} />
      <div className="bg-dark vh-100">
        <div className="container pt-5">
          <h3 className="text-light mt-5 mb-5">MY PROFILE </h3>
          <div className="table-responsive">
            <table className="table  text-light  w-50 mt-5 ms-5">
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
              className="btn btn-outline-warning btn-md m-auto"
              data-bs-toggle="modal"
              data-bs-target="#editProfileModal"
            >
              Edit profile
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
