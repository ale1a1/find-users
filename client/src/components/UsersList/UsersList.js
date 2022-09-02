import { Fragment, useState, useEffect } from "react";

import { UsersTable } from "./UsersTable";
import { LoginRepository } from "../../libs/repository/LoginRepository";
import { FavouriteUsersService } from "../../libs/FavouritesUsersService";
import { UsersService } from "../../libs/UsersService";

const favouriteUsersService = new FavouriteUsersService();
const usersService = new UsersService();
const loginRepository = new LoginRepository();
// const owner = loginRepository.list()[0];
// console.log("owner" + owner);

export function UsersList(props) {
  // const getCurrentUserId = async () => {
  //   const currentUserEmail = loginRepository.list()[0].email;
  //   const currentUserID = await usersService
  //     .getCurrentUser({ email: currentUserEmail })
  //     .then((user) => user.id);
  //   return currentUserID;
  // };

  const [usersList, setUsers] = useState([]);
  const [favouriteUsersList, setFavouriteUsersList] = useState([]);

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

  useEffect(() => {
    usersService.getUsers().then((users) => setUsers(users));
    // favouriteUsersService
    //   .getUsersFromJunction(currentUserID)
    //   .then((users) => users.map((user) => user.id))
    //   .then((idList) => favouriteUsersService.getUsers(idList))
    //   .then((favUsers) => setFavouriteUsersList(favUsers));
    favouriteUsersService
      .getUsersFromJunction(currentUserID)
      .then((users) => users.map((user) => parseInt(user.favUserID)))
      .then((idList) => favouriteUsersService.getUsers(idList))
      .then((favUsers) => setFavouriteUsersList(favUsers));
    // favouriteUsersService
    //   .getUsers(favUsersJunctionIdList)
    //   .then((favouriteUsers) => setFavouriteUsersList(favouriteUsers));
  }, []);

  console.log(usersList);
  console.log(favouriteUsersList);

  // favouriteUsersService.getUsers(idList)
  // setFavouriteUsersList(favUsers),

  // useEffect(() => {
  //   favUsersFunction();
  // });

  const updateUsersList = async (user) => {
    // const favouriteUser = { owner, ...user };
    const userForJunction = { ownerID: currentUserID, favUserID: user.id };
    // await favouriteUsersService.addUser(favouriteUser);
    await favouriteUsersService.addUserToJunction(userForJunction);
    // const updatedUsers = await usersService.getUsers();
    // const updatedFavouriteUsers = await favouriteUsersService.getUsers(owner);
    // const favUsersJunction = await favouriteUsersService.getUsersFromJunction(
    //   currentUserID
    // ); //da questo array di object tira fuori una lista di Favuser Id che appartengono all user che ha come ID il current User ID!
    // dopo di che quando hai questi ID in un array query il DB cerando gli user che hanno questi ID e ritornali in una const
    // quest const, che è un array di users, sarà usata per fare un for each e aggiornare sia la lista di userlist component,
    // che la lista di fav user component
    // const favUsersJunctionIdList = [];
    // favUsersJunction.forEach((user) =>
    //   favUsersJunctionIdList.push(user.favUserID)
    // );
    // const updatedFavouriteUsers = await favouriteUsersService.getUsers(
    //   favUsersJunctionIdList
    // );
    // console.log(favUsersJunction);
    // console.log(favUsersJunctionIdList);
    // console.log(updatedFavouriteUsers);
    // setUsers(updatedUsers);
    // // setFavouriteUsersList(updatedFavouriteUsers);
    favUsersFunction();
  };

  return (
    <Fragment>
      <div className="container pt-5">
        <h3 className="text-light mt-5 mb-5 mb-1 usersListHeader">
          USERS LIST
        </h3>
        <div className="table-responsive usersTable">
          <table className="table table-fixed text-light w-75 ms-5 align-middle">
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
