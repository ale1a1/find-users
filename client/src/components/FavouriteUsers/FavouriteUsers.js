import { Component, Fragment } from "react";
import { FavUsersList } from "./FavUsersList";
import { FavouriteUsersService } from "../../libs/FavouritesUsersService";
import { LoginRepository } from "../../libs/repository/LoginRepository";

import { DeleteUserModal } from "../FavouriteUsers/DeleteUserModal";
import { NoFavs } from "./NoFavs";

import "../../style.css";

const favouriteUsersService = new FavouriteUsersService();
const loginRepository = new LoginRepository();
const currentUserID = loginRepository.list()[0]?.id;

export class FavouriteUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteUsers: [],
      currentUser: {},
      loader: true,
    };

    this.onRemove = async (user) => {
      await favouriteUsersService.removeUser(user);
      favouriteUsersService
        .getUsersFromJunction(currentUserID)
        .then((users) => users.map((user) => parseInt(user.favUserID)))
        .then((idList) => favouriteUsersService.getUsers(idList))
        .then((favUsers) => this.setState({ favouriteUsers: favUsers }));
    };

    this.deleteFavModalSwitcher = () => {
      const deleteFaveModal = document.querySelector(".deleteFavModal");
      deleteFaveModal.classList.toggle("showModal");
    };

    this.handleCurrentUser = (user) => {
      this.setState({ currentUser: user });
      console.log(user);
    };

    this.loaderFunct = () => {
      this.setState({ loader: false });
    };
  }

  componentDidMount() {
    this.props.loaderSwitcher(true);
    favouriteUsersService
      .getUsersFromJunction(currentUserID)
      .then((users) => users.map((user) => parseInt(user.favUserID)))
      .then((idList) => favouriteUsersService.getUsers(idList))
      .then((favUsers) => this.setState({ favouriteUsers: favUsers }))
      .then(this.props.loaderSwitcher(false))
      .then(setTimeout(this.loaderFunct, 1000));
  }

  render() {
    const loader = this.state.loader;
    const favTable = (
      <div className="table-responsive usersTable">
        <table className="table text-light align-middle">
          <thead className="table-light">
            <tr>
              <th>Username</th>
              <th>Email </th>
              <th>Phone </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <FavUsersList
              users={this.state.favouriteUsers}
              onRemove={this.onRemove}
              deleteFavModalSwitcher={this.deleteFavModalSwitcher}
              handleCurrentUser={this.handleCurrentUser}
            />
          </tbody>
        </table>
      </div>
    );

    return loader ? (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    ) : (
      <Fragment>
        <div className="container pt-5">
          <h1 className="text-light mb-5 usersListHeader">
            FAVOURITES
          </h1>
          {this.state.favouriteUsers[0] ? favTable : <NoFavs />}
        </div>
        <DeleteUserModal
          user={this.state.currentUser}
          onRemove={this.onRemove}
          deleteFavModalSwitcher={this.deleteFavModalSwitcher}
        />
      </Fragment>
    );
  }
}
