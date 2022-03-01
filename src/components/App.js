import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  //state for toy list
  const [toys, setToys] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onDeleteItem(deletedItem) {
    let updatedToys = toys.filter((el) => {
      return el.id !== deletedItem.id;
    });
    setToys(updatedToys);
  }
  function onAddItem(newObj) {
    setToys([...toys, newObj]);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddItem={onAddItem} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer setToys={setToys} toys={toys} onDeleteItem={onDeleteItem} />
    </>
  );
}

export default App;
