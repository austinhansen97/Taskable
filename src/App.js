import React, { useState } from "react";
import TileArea from "./components/TileArea";
import "./components/TileArea.css";

const dataObject = [
  { task: "Title", description: "Description of task" },
  // { name: "Tom", job: "Smith's", hobby: "Swimming" },
  // { name: "Kyle", job: "Chevron", hobby: "Hanging with friends" },
  // { name: "Howdy", job: "Joe's Crabshack", hobby: "Running" },
  // { name: "Kelly", job: "Winco", hobby: "Gaming" },
];

function App() {
  const [data, newData] = useState(dataObject);

  function addCardHandler(newCardArray) {
    newData((previousData) => {
      return [newCardArray, ...previousData];
    });
    console.log("App.js");
  }

  return (
    <div className="fullSite">
      <TileArea item={data} getToApp={addCardHandler} />;
    </div>
  );
}

export default App;
