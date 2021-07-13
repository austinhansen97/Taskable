import TileCard from "./TileCard";
import Button from "./Button";
import "./TileArea.css";

function TileArea(props) {
  function getDivHandler(cardFromButton) {
    console.log("TileArea.js");
    props.getToApp(cardFromButton);
  }

  return (
    <div>
      <Button getDiv={getDivHandler} />
      <div className="tile">
        {props.item.map((mapArray) => (
          <TileCard
            task={mapArray.task}
            description={mapArray.description}
          />
        ))}
      </div>
    </div>
  );
}

export default TileArea;
