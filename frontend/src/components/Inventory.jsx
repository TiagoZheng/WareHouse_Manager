import React from "react";

const Inventory = () => {
  return (
    <div className="flex flex-col flex-1 m-8 ">
      <div className="mb-8">
        <p className=" text-2xl font-bold">Inventory</p>
        <p>Dashboard / Inventory</p>
      </div>
      <div className="flex flex-[9] bg-cyan-50 rounded-2xl p-8">Table</div>
    </div>
  );
};

export default Inventory;
