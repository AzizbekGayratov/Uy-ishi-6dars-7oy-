import React from "react";
import { AiOutlineClear } from "react-icons/ai";

const MyInput = ({ text, setText }) => {
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 mt-[40px]">
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Type here"
        className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 px-4"
      />
      <AiOutlineClear
        onClick={() => {
          setText("");
          inputRef.current.focus();
        }}
        className="w-10 h-10 cursor-pointer"
      />
    </div>
  );
};

export default MyInput;
