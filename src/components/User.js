import "./User.css";

function User(props) {
  return (
    <div>
      <h3 className="user-format">{props.name}</h3>
    </div>
  );
}

export default User;
