import { Fragment, useState, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";

import { FavouriteUsersService } from "../../libs/FavouritesUsersService";
import { UsersService } from "../../libs/UsersService";

const favouriteUsersService = new FavouriteUsersService();
const usersService = new UsersService();

export function UsersList(props) {
  const [usersList, setUsers] = useState([]);
  const [favouriteUsersList, setFavouriteUsersList] = useState([]);

  const users = () => {
    const renderedUser = usersList.map((user) => {
      if (favouriteUsersList.filter((e) => e.email === user.email).length > 0) {
        console.log("already in the favourites");
        return (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>
              <button className="btn btn-outline-primary btn-sm" disabled>
                already on my favourites
              </button>
            </td>
          </tr>
        );
      } else {
        console.log("Not yet in the favourite");
        return (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>
              <button
                onClick={function () {
                  updateUsersList(user);
                }}
                className="btn btn-outline-warning btn-sm"
              >
                Add to my favourite Users list
              </button>
            </td>
          </tr>
        );
      }
    });
    return renderedUser;
  };

  const [usersTable, setUsersTable] = useState(users());

  useEffect(() => {
    usersService.getUsers().then((users) => setUsers(users));
    favouriteUsersService
      .getUsers()
      .then((favouriteUsers) => setFavouriteUsersList(favouriteUsers));
      setUsersTable(users());
  }, []);

  const addUser = favouriteUsersService.addUser;

  const updateUsersList = (user) => {
    setUsersTable(users());
    addUser(user);
  };

  return (
    <Fragment>
      <Navbar logoutHandler={props.logoutHandler} />
      <div className="bg-dark vh-100">
        <div className="container pt-5">
          <h3 className="text-light mt-5 mb-5">ALL USERS LIST</h3>
          <div className="table-responsive">
            <table className="table  text-light mt-5 w-75 ms-5">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email address</th>
                  <th>Phone number</th>
                </tr>
              </thead>
              {/* <tbody>{usersTable}</tbody> */}
              {/* should be this one...bbu it comes back empty...why???? */}
              <tbody>{users()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
