import "../../style.css";

export function FavUsersList({ users, onRemove }) {
  return users.map((user) => (
    <tr className="hoverTable" key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td className="right">
        <button
          onClick={function () {
            onRemove(user);
          }}
          className="btn btn-outline-warning btn-sm"
        >
          remove
        </button>
      </td>
    </tr>
  ));
}
