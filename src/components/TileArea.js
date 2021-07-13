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
      <Button name={props.item[0].name} getDiv={getDivHandler} />
      <div className="tile">
        {props.item.map((mapArray) => (
          <TileCard
            name={mapArray.name}
            job={mapArray.job}
            hobby={mapArray.hobby}
          />
        ))}
      </div>
    </div>
  );
}

export default TileArea;
