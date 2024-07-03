import React from "react";

const Container = ({ color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-[400px] h-[270px] rounded-3xl mb-10"
    ></div>
  );
};

export default Container;
