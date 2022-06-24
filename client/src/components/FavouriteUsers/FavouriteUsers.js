import { Component, Fragment } from "react";
import { FavUsersList } from "./FavUsersList";
import { FavouriteUsersService } from "../../libs/FavouritesUsersService";
import { LoginRepository } from "../../libs/repository/LoginRepository";

import "../../style.css";

const favouriteUsersService = new FavouriteUsersService();
const loginRepository = new LoginRepository();
const owner = loginRepository.list()[0];
const currentUserID = loginRepository.list()[0]?.id;

export class FavouriteUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteUsers: [],
    };

    // this.removeFavourite = (user) => {
    //   favouriteUsersService.removeUser(user);
    //   favouriteUsersService
    //     .getUsers()
    //     .then((favouriteUsers) => this.setState({ favouriteUsers }));
    // };

    // this.onRemove = (user) => {
    //   this.removeFavourite(user);
    // };

    //////Fai una cosa simile per USERLIST!!!

    this.onRemove = async (user) => {
      await favouriteUsersService.removeUser(user);
      favouriteUsersService
        .getUsersFromJunction(currentUserID)
        .then((users) => users.map((user) => parseInt(user.favUserID)))
        .then((idList) => favouriteUsersService.getUsers(idList))
        .then((favUsers) => this.setState({ favouriteUsers: favUsers }));
    };
  }

  // useEffect(() => {
  //   usersService.getUsers().then((users) => setUsers(users));
  //   // favouriteUsersService
  //   //   .getUsersFromJunction(currentUserID)
  //   //   .then((users) => users.map((user) => user.id))
  //   //   .then((idList) => favouriteUsersService.getUsers(idList))
  //   //   .then((favUsers) => setFavouriteUsersList(favUsers));
  //   favouriteUsersService
  //     .getUsersFromJunction(currentUserID)
  //     .then((users) => users.map((user) => parseInt(user.favUserID)))
  //     .then((idList) => favouriteUsersService.getUsers(idList))
  //     .then((favUsers) => setFavouriteUsersList(favUsers));
  //   // favouriteUsersService
  //   //   .getUsers(favUsersJunctionIdList)
  //   //   .then((favouriteUsers) => setFavouriteUsersList(favouriteUsers));
  // }, []);

  componentDidMount() {
    favouriteUsersService
      .getUsersFromJunction(currentUserID)
      .then((users) => users.map((user) => parseInt(user.favUserID)))
      .then((idList) => favouriteUsersService.getUsers(idList))
      .then((favUsers) => this.setState({ favouriteUsers: favUsers }));
  }

  // componentDidMount() {
  //   favouriteUsersService
  //     .getUsers(owner)
  //     .then((favouriteUsers) => this.setState({ favouriteUsers }));
  // }

  render() {
    return (
      <Fragment>
        <div className="container pt-5">
          <h3 className="text-light mt-5 mb-1">FAVOURITE USERS LIST</h3>
          <div className="table-responsive">
            <table className="table text-light w-75 mt-5 ms-5 align-middle">
              <thead className="table-light">
                <tr>
                  <th>Username</th>
                  <th>Email </th>
                  <th>Phone </th>
                </tr>
              </thead>
              <tbody>
                <FavUsersList
                  users={this.state.favouriteUsers}
                  onRemove={this.onRemove}
                />
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}
