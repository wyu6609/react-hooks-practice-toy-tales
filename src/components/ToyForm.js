import React, { useState } from "react";

function ToyForm({ onAddItem }) {
  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    likes: 0,
  });

  const onChangeHandler = (event) => {
    //create newObj
    const newObj = { ...newForm, [event.target.name]: event.target.value };
    console.log(newObj);
    setNewForm(newObj);
    //POST REQUEST
  };

  const addToyBtnHandler = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/toys", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    })
      .then((response) => response.json())
      .then((newObj) => {
        console.log("added", newObj.name);
        onAddItem(newObj);
      });
  };

  return (
    <div className="container">
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={onChangeHandler}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={onChangeHandler}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          onClick={addToyBtnHandler}
        />
      </form>
    </div>
  );
}

export default ToyForm;
