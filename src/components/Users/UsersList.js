import UserItem from './UserItem'
import classes from './UserList.module.css'


function UserList(props) {
  return (
    <ul className={classes.list}>
      {props.users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          display_name={user.display_name}
          short_name={user.short_name}
          role={user.role}
          description={user.description}
        />
      ))}   
    </ul>
  );
}

export default UserList;
