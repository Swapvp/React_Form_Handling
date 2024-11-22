import React from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-300 relative">
        <Cards />
        <Form />
      </div>
    </>
  );
}

export default App;
