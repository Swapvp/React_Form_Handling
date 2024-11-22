import React from "react";
import Card from "./Card";
const Cards = ({ users, handleRemoveCard }) => {
  return (
    <div className="w-full h-[90vh] overflow-auto p-4 flex flex-wrap justify-center items-center gap-10">
      {users.map((item, index) => {
        return (
          <Card
            handleRemoveCard={handleRemoveCard}
            key={index}
            user={item}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Cards;
