import React from "react";
const Card = ({ user, handleRemoveCard, index }) => {
  return (
    <div className="w-60 h-auto p-4 bg-slate-50  flex flex-col items-center justify-center rounded-lg">
      <div className="w-20 h-20 bg-slate-600 rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src={user.image} alt="" />
      </div>
      <div className="text-center ">
        <h1 className="text-lg font-semibold">{user.name}</h1>

        <h3 className="text-gray-400">{user.email}</h3>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dolores
        </p> */}
      </div>
      <button
        onClick={() => handleRemoveCard(index)}
        className="bg-red-600 text-white px-3 py-1 rounded-lg my-2"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
