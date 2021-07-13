import React, { useState } from "react";

import "./Button.css";

//states to change values
function Button(props) {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [hobby, setHobby] = useState("");

  //values typed into card
  function nameHandler(event) {
    setName(event.target.value);
  }

  function jobHandler(event) {
    setJob(event.target.value);
  }

  function hobbyHandler(event) {
    setHobby(event.target.value);
  }

  //submission function
  function addCardHandler(event) {
    // stops page from resfreshing thing
    event.preventDefault();

    //new dynamic array is constructed
    const buttonArray = [{ name: name, job: job, hobby: hobby }];

    console.log("button.js");

    if (name !== "") {
      props.getDiv(buttonArray[0]);
      setName("");
      setJob("");
      setHobby("");
    }
  }

  return (
    <div className="inputArea">
      <div className="left">
        <h1>Make a Task</h1>
      </div>
      <form className="right" onSubmit={addCardHandler}>
        <div className="individualField">
          <label>Name </label>
          <input
            className="inputField"
            type="text"
            value={name}
            onChange={nameHandler}
          />
        </div>
        <div className="individualField">
          <label>Job </label>
          <input
            className="inputField"
            type="text"
            value={job}
            onChange={jobHandler}
          />
        </div>
        <div className="individualField">
          <label>Hobby </label>
          <input
            className="inputField"
            type="text"
            value={hobby}
            onChange={hobbyHandler}
          />
        </div>
        <div className="buttonParent">
          <button className="button" type="submit">
            ADD
          </button>
          <button className="button" type="submit">
            CLEAR <br></br>TASKS
          </button>
        </div>
      </form>
    </div>
  );
}

export default Button;
