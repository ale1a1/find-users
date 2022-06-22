export function FavUsersList({ users, onRemove }) {
  return users.map((user) => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>
        <button
          onClick={function () {
            onRemove(user);
          }}
          className="btn btn-outline-warning btn-sm"
        >
          Remove User from my favourites
        </button>
      </td>
    </tr>
  ));
}
