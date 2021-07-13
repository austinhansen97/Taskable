import "./TileArea.css";

import User from "./User";
import UserJob from "./UserJob";

function TileCard(props) {
  return (
    <div className="eachTile">
      <User task={props.task} />
      <UserJob description={props.description} />
    </div>
  );
}

export default TileCard;
