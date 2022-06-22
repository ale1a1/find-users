import { config } from "../config";

export class FavouriteUsersService {
  // getUsers(owner) {
  //   return fetch(`http://localhost:3001/user/favourites/${owner}`, {
  //     method: "GET",
  //   }).then((data) => data.json());
  // }

  // getUsers(idList) {
  //   return fetch(`http://localhost:3001/user/favourites/${idList}`, {
  //     method: "GET",
  //   }).then((data) => data.json());
  // }

  getUsers(idList) {
    return fetch(`${config.serverUrl}/user/favourites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(idList),
    }).then((data) => data.json());
  }

  getUsersFromJunction(id) {
    return fetch(`${config.serverUrl}/user/favouritesJunction/${id}`, {
      method: "GET",
    }).then((data) => data.json());
  }

  getOneUser(email) {
    return fetch(`${config.serverUrl}/user/getOneFavourite`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    }).then((data) => data.json());
  }

  addUser(user) {
    return fetch(`${config.serverUrl}/user/addToFavourites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((data) => data.json());
  }

  addUserToJunction(user) {
    return fetch(`${config.serverUrl}/user/addToFavouritesJunction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((data) => data.json());
  }

  removeUser(user) {
    return fetch(`${config.serverUrl}/user/removeFavourite`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((data) => data.json());
  }
}
