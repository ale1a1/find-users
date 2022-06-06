export class FavouriteUsersService {
  getUsers() {
    return fetch("http://localhost:3001/user/favourites", {
      method: "GET",
    }).then((data) => data.json());
  }
  
  getOneUser(email) {
    return fetch("http://localhost:3001/user/getOneFavourite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    }).then((data) => data.json());
  }
  
  addUser(user) {
    return fetch("http://localhost:3001/user/addToFavourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((data) => data.json());
  }

  removeUser(user) {
    return fetch("http://localhost:3001/user/removeFavourite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Cookie: "",
      },
      body: JSON.stringify(user),
    }).then((data) => data.json());
  }
}
