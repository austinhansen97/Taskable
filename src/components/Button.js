import React, { useState } from "react";

import "./Button.css";

//states to change values
function Button(props) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  

  //values typed into card
  function taskHandler(event) {
    setTask(event.target.value);
  }

  function descriptionHandler(event) {
    setDescription(event.target.value);
  }

  //submission function
  function addCardHandler(event) {
    // stops page from resfreshing thing
    event.preventDefault();

    //new dynamic array is constructed
    const buttonArray = [{ task: task, description: description}];

    console.log("button.js");

    if (task !== "") {
      props.getDiv(buttonArray[0]);
      setTask("");
      setDescription("");
    }
  }

  return (
    <div className="inputArea">
      <div className="left">
        <h1>Taskable</h1>
        <p>Add a task, stay organized</p>
      </div>
      <form className="right" onSubmit={addCardHandler}>
        <div className="individualField">
          <label>Task </label>
          <input
            className="taskField"
            type="text"
            value={task}
            onChange={taskHandler}
            autoFocus
          />
        </div>
        <div className="individualField">
          <label>Description </label>
          <textarea className="descriptionField" maxLength="300" wrap value={description}
            onChange={descriptionHandler}
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
