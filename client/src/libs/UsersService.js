import { config } from "../config";
export class UsersService {
  getUsers() {
    return fetch(`${config.serverUrl}/user`, {
      method: "GET",
    }).then((data) => data.json());
  }

  getCurrentUser(email) {
    return fetch(`${config.serverUrl}/user/currentUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    }).then((data) => data.json());
  }

  addUser(user) {
    return fetch(`${config.serverUrl}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(async (data) => {
      const json = await data.json();
      return { status: data.status, data: json };
    });
  }

  loginUser(email, password) {
    return fetch(`${config.serverUrl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((data) => data.json());
  }
  // editUser(id, name, phoneNumber) {
  //   return fetch("http://localhost:3001/user/editUser", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ id, name, phoneNumber }),
  //   }).then((data) => data.json());

  editUser(id, name, phoneNumber) {
    return fetch(`${config.serverUrl}/user/editUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, phoneNumber }),
    }).then(async (data) => {
      const json = await data.json();
      return { status: data.status, data: json };
    });
  }
}
