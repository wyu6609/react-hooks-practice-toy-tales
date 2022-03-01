import React, { useEffect } from "react";
import ToyCard from "./ToyCard";
import { v4 as uuid } from "uuid";

function ToyContainer({ setToys, toys, onDeleteItem }) {
  useEffect(() => {
    fetchAPI();
  }, []);
  const fetchAPI = () => {
    fetch("http://localhost:3001/toys")
      .then((resp) => resp.json())
      .then((data) => setToys(data));
  };

  return (
    <div id="toy-collection">
      {toys.map((toy) => {
        return <ToyCard key={uuid()} toy={toy} onDeleteItem={onDeleteItem} />;
      })}
    </div>
  );
}

export default ToyContainer;
