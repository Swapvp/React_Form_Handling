import React from "react";
const Card = () => {
  return (
    <div className="w-60 h-60 p-4 bg-zinc-100 flex flex-col items-center justify-center rounded-lg">
      <div className="w-20 h-20 bg-slate-600 rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src="" alt="" />
      </div>
      <div className="text-center ">
        <h1 className="text-lg font-semibold">Name</h1>

        <h3 className="text-gray-400">Email@emaiil.com</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dolores
        </p>
      </div>
    </div>
  );
};

export default Card;
