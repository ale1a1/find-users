import React, { Fragment, useState } from "react";
import { UsersService } from "../../libs/UsersService";
import { LoginRepository } from "../../libs/repository/LoginRepository";
import { LogoutRepository } from "../../libs/repository/LogoutRepository";

import { MyProfileUpdatedModal } from "../MyProfile/MyProfileUpdatedModal";

const loginRepository = new LoginRepository();
const logoutRepository = new LogoutRepository();
const usersService = new UsersService();

const editUser = usersService.editUser;

export function MyProfileFormModal(props) {
  const [labelErrorMessage, setLabelErrorMessage] = useState({});

  const id = props.currentUser.id;
  const name = !props.currentUser.name ? "" : props.currentUser.name;
  const phoneNumber = !props.currentUser.phoneNumber
    ? ""
    : props.currentUser.phoneNumber;

  // const handler = (e) => {
  //   e.preventDefault();
  //   // editUser(id, name, phoneNumber).then((user) => props.updateUser(user));
  //   editUser(id, name, phoneNumber)
  //   logoutRepository.remove();
  //   loginRepository.save(props.currentUser.email);
  //   console.log(props.currentUser.id);
  //   alert("user profile updated!");
  // };

  //muovi quest logica in Myprofil??? e passala qui come state?????????

  const myProfileUpdatedModalSwitcher = () => {
    const myProfileUpdatedModal = document.querySelector(
      ".myProfileUpdatedModal"
    );
    myProfileUpdatedModal.classList.toggle("showModal");
  };

  const handler = (e) => {
    e.preventDefault();
    editUser(id, name, phoneNumber).then((response) => {
      const errors = {};
      if (response.status === 409) {
        // e.preventDefault(); //!!!!!!!!!!!NOT WORKING!!!!!!!!!!!///
        response.data.errors.forEach((element) => {
          errors[element.field] = element.message;
        });
        setLabelErrorMessage(errors);
        console.log(labelErrorMessage);
      } else {
        myProfileUpdatedModalSwitcher();
      }
      //  else {
      //   logoutRepository.remove();
      //   loginRepository.save({
      //     email: props.currentUser.email,
      //     id: props.currentUser.id,
      //   });
      //   console.log(props.currentUser.id);
      //   // props.updateUser(response.data.user)
      //   alert("user profile updated!"); ///!!!!!NOT WORKING!!!!!!!!!!///
      //   document.getElementById("myForm").submit();
      // }
    });
  };

  // const closeHandler = () => {
  //   const currentUser = loginRepository.list();
  //   const currentUserEmail = { email: currentUser[0] };
  //   usersService
  //     .getCurrentUser(currentUserEmail)
  //     .then((user) => props.updateUser(user));
  // };

  const closeHandler = () => {
    props.updateUser();
    setLabelErrorMessage({});
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="editProfileModal"
        tabIndex="-1"
        aria-labelledby="editProfileLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog myProfileFormModal">
          <div className="modal-content myProfileFormModalBox fw-bold">
            <div className="modal-header myProfileFormModalHeader">
              <h4 className="modal-title  ">EDIT PROFILE</h4>
            </div>
            <div className="modal-body">
              {/* <form id="myForm" onSubmit={handler}> */}
              <form id="myForm">
                <div className="mb-3">
                  {labelErrorMessage.username && (
                    <label className="col-form-label text-warning display-6">
                      {labelErrorMessage.username}
                    </label>
                  )}
                  {!labelErrorMessage.username && (
                    <label className="col-form-label">username</label>
                  )}
                  {/* <label className="col-form-label">username</label> */}
                  <input
                    type="text"
                    className="form-control bg-dark text-white"
                    name="username"
                    placeholder="Insert the new username"
                    onChange={(e) => props.changeName(e.target.value)}
                    value={name}
                    required
                  />
                </div>

                <div className="mb-3">
                  {labelErrorMessage.phoneNumber && (
                    <label className="col-form-label text-warning display-6">
                      {labelErrorMessage.phoneNumber}
                    </label>
                  )}
                  {!labelErrorMessage.phoneNumber && (
                    <label className="col-form-label">phone number</label>
                  )}
                  {/* <label className="col-form-label">phone number</label> */}
                  <input
                    type="number"
                    className="form-control bg-dark text-white"
                    name="phone number"
                    placeholder="Insert the new phone number"
                    onChange={(e) => props.changePhoneNumber(e.target.value)}
                    value={phoneNumber}
                    required
                  ></input>
                </div>

                <div className="modal-footer myProfileFormModalFooter">
                  <button
                    className="btn btn-outline-danger mt-2"
                    type="button"
                    data-bs-dismiss="modal"
                    onClick={closeHandler}
                  >
                    Close
                  </button>
                  {/* <button className="btn btn-primary  mt-2" type="submit"> */}
                  <button
                    className="btn btn-outline-warning  mt-2"
                    onClick={handler}
                  >
                    SAVE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <MyProfileUpdatedModal />
    </Fragment>
  );
}
