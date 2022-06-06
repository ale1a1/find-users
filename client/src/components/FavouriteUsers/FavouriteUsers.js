import { Component, Fragment } from "react";
import { Navbar } from "../Navbar/Navbar";
import { FavUsersList } from "./FavUsersList";
import { FavouriteUsersService } from "../../libs/FavouritesUsersService";

const favouriteUsersService = new FavouriteUsersService();

export class FavouriteUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteUsers: [],
    };

    this.removeFavourite = (user) => {
      favouriteUsersService.removeUser(user);
      favouriteUsersService
        .getUsers()
        .then((favouriteUsers) => this.setState({ favouriteUsers }));
    };

    this.onRemove = (user) => {
      this.removeFavourite(user);
    };
  }

  componentDidMount() {
    favouriteUsersService
      .getUsers()
      .then((favouriteUsers) => this.setState({ favouriteUsers }));
  }
  componentDidUpdate() {
    favouriteUsersService
      .getUsers()
      .then((favouriteUsers) => this.setState({ favouriteUsers }));
  }

  render() {
    return (
      <Fragment>
        <Navbar logoutHandler={this.props.logoutHandler} />
        <div className="bg-dark vh-100">
          <div className="container pt-5">
            <h3 className="text-light mt-5 mb-5">FAVOURITE USERS LIST</h3>
            <div className="table-responsive">
              <table className="table  text-light w-75 mt-5 ms-5">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Email address</th>
                    <th>Phone number</th>
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
        </div>
      </Fragment>
    );
  }
}
