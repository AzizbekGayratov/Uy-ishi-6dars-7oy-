import React from "react";
import { ComponentC } from "./Combine.js";

const ComponentB = ({ count, setCount }) => {
  return (
    <>
      <h1 className="text-9xl font-bold mb-8">{count}</h1>
      <ComponentC count={count} setCount={setCount} />
    </>
  );
};

export default ComponentB;
