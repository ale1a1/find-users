export function UsersTable(props) {
  return props.usersList.map((user) => {
    if (user.email !== props.currentUserEmail) {
      if (
        props.favouriteUsersList.filter((e) => e.email === user.email).length >
        0
      ) {
        return (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>
              <button className="btn btn-outline-primary btn-sm" disabled>
                on my favourites
              </button>
            </td>
          </tr>
        );
      } else {
        return (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>
              <button
                onClick={function () {
                  props.updateUsersList(user);
                }}
                className="btn btn-outline-warning btn-sm"
              >
                add to favourites
              </button>
            </td>
          </tr>
        );
      }
    }
  });
}