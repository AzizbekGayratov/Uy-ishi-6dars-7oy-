import React from "react";
import toast, { Toaster } from "react-hot-toast";

const ComponentC = ({ count, setCount }) => {
  return (
    <div className="flex gap-4">
      <Toaster position="top-right" />
      <button
        onClick={() => {
          toast.success("-1");
          setCount(count - 1);
        }}
        className="border-2 border-black py-[5px] px-[12px] text-[22px] rounded-[8px] hover:bg-black hover:text-white transition"
      >
        decrement
      </button>
      <button
        onClick={() => {
          toast("Reseted");
          setCount(0);
        }}
        className="border-2 border-black py-[5px] px-[12px] text-[22px] rounded-[8px] hover:bg-black hover:text-white transition"
      >
        reset
      </button>
      <button
        onClick={() => {
          toast.success("+1");
          setCount(count + 1);
        }}
        className="border-2 border-black py-[5px] px-[12px] text-[22px] rounded-[8px] hover:bg-black hover:text-white transition"
      >
        increment
      </button>
    </div>
  );
};

export default ComponentC;
