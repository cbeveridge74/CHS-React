// import classes from "./SelectUser.module.css";

function UserItem(props) {
  return (
    <select>
      {props.users.map((user) => (
        <option value={user.user}>{user.display_name}</option>
      ))}
    </select>
  );
}

export default UserItem;
