import React from "react";

const Form = () => {
  return (
    <div className="flex justify-center  bg-slate-400 p-4 absolute bottom-0 w-full">
      <form action="" className="flex gap-4">
        <input
          className="rounded-md py-2 px-2"
          type="text"
          placeholder="name"
        />
        <input
          className="rounded-md py-2 px-2"
          type="email"
          placeholder="email"
        />
        <input
          className="rounded-md py-2 px-2"
          type="text"
          placeholder="image url"
        />
        <input
          className="rounded-md py-2 px-4 bg-slate-700 text-white"
          type="submit"
          placeholder="image url"
        />
      </form>
    </div>
  );
};

export default Form;
