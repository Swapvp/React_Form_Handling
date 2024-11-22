import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };

  const handleRemoveCard = (id) => {
    setUsers(() => users.filter((item, index) => index != id));
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-300 relative">
        <h1 className="text-center p-2 font-semibold text-2xl">Enter Details to see card</h1>
        <Cards handleRemoveCard={handleRemoveCard} users={users} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </>
  );
}

export default App;
