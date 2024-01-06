"use client";

import React, { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-7xl font-bold mb-4"> {count}</h1>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <button
          className="btn btn-primary w-full md:w-auto my-2"
          onClick={() => setCount(count + 1)}
        >
          Count
        </button>
        <button
          className="btn btn-accent w-full md:w-auto  my-2"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ClientPage;
