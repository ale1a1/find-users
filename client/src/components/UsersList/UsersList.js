import { Fragment, useState, useEffect } from "react";

import { UsersTable } from "./UsersTable";
import { LoginRepository } from "../../libs/repository/LoginRepository";
import { FavouriteUsersService } from "../../libs/FavouritesUsersService";
import { UsersService } from "../../libs/UsersService";

const favouriteUsersService = new FavouriteUsersService();
const usersService = new UsersService();
const loginRepository = new LoginRepository();


export function UsersList(props) {
  

  const [usersList, setUsers] = useState([]);
  const [favouriteUsersList, setFavouriteUsersList] = useState([]);
  const [loader, setLoader] = useState(true);

  const currentUserID = loginRepository.list()[0].id;
  const currentUserEmail = loginRepository.list()[0].email;

  let favUsersJunctionIdList = [];

  const favUsersFunction = async () => {
    const favUsersJunction = await favouriteUsersService.getUsersFromJunction(
      currentUserID
    );
    favUsersJunction.forEach((user) =>
      favUsersJunctionIdList.push(parseInt(user.favUserID))
    );
    const updatedFavouriteUsers = await favouriteUsersService.getUsers(
      favUsersJunctionIdList
    );
    console.log(updatedFavouriteUsers);
    setFavouriteUsersList(updatedFavouriteUsers);
    console.log(favUsersJunctionIdList);
    const updatedUsers = await usersService.getUsers();
    setUsers(updatedUsers);
  };

  const loaderFunct = () => {
    setLoader(false);
  };

  useEffect(() => {
    props.loaderSwitcher(true);
    usersService.getUsers().then((users) => setUsers(users));  
    favouriteUsersService
      .getUsersFromJunction(currentUserID)
      .then((users) => users.map((user) => parseInt(user.favUserID)))
      .then((idList) => favouriteUsersService.getUsers(idList))
      .then((favUsers) => setFavouriteUsersList(favUsers))
      .then(props.loaderSwitcher(false))
      .then(setTimeout(loaderFunct, 1000));  
  }, []);

  const updateUsersList = async (user) => {
    const userForJunction = { ownerID: currentUserID, favUserID: user.id };
    await favouriteUsersService.addUserToJunction(userForJunction);
    favUsersFunction();
  };

  return loader ? (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  ) : (
    <Fragment>
      <div className="container pt-5">
        <h1 className="text-light mb-5 usersListHeader">
          USERS LIST
        </h1>
        <div className="usersTable table-responsive"> 
          <table className="table table-fixed text-light align-middle">
            <thead className="table-light">
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <UsersTable
                usersList={usersList}
                favouriteUsersList={favouriteUsersList}
                updateUsersList={updateUsersList}
                currentUserEmail={currentUserEmail}
              />
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}
