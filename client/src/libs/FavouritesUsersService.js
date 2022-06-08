export class FavouriteUsersService {
  getUsers() {
    return fetch("https://find-users.herokuapp.com/user/favourites", {
      method: "GET",
    }).then((data) => data.json());
  }

  getOneUser(email) {
    return fetch("https://find-users.herokuapp.com/user/getOneFavourite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    }).then((data) => data.json());
  }

  addUser(user) {
    return fetch("https://find-users.herokuapp.com/user/addToFavourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((data) => data.json());
  }

  removeUser(user) {
    return fetch("https://find-users.herokuapp.com/user/removeFavourite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Cookie: "",
      },
      body: JSON.stringify(user),
    }).then((data) => data.json());
  }
}
