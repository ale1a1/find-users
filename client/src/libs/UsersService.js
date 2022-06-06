export class UsersService {
  getUsers() {
    return fetch("http://localhost:3001/user", {
      method: "GET",
    }).then((data) => data.json());
  }
  getCurrentUser(email) {
    return fetch("http://localhost:3001/user/currentUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    }).then((data) => data.json());
  }
  addUser(user) {
    return fetch("http://localhost:3001/user/register", {
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
    return fetch("http://localhost:3001/user/login", {
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
    return fetch("http://localhost:3001/user/editUser", {
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
