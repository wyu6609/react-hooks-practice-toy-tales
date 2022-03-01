import React, { useState } from "react";

function ToyCard({ toy, onDeleteItem }) {
  const [likes, setLikes] = useState(toy.likes);
  const likeBtnHandler = () => {
    //PATCH REQUEST
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likes + 1 }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLikes(likes + 1);
      });
  };

  const deleteBtnHandler = () => {
    console.log("clicked");
    //DELETE request
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    }).then(() => {
      console.log(toy.name, "deleted");
      onDeleteItem(toy);
    });
  };
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={likeBtnHandler}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={deleteBtnHandler}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
