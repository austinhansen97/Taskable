import "./TileArea.css";

import User from "./User";
import UserJob from "./UserJob";
import UserHobby from "./UserHobby";

function TileCard(props) {
  return (
    <div className="eachTile">
      <User name={props.name} />
      <UserJob job={props.job} />
      <UserHobby hobby={props.hobby} />
    </div>
  );
}

export default TileCard;
