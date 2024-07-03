import React from "react";

const MyInput = ({ color, setColor }) => {
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        onChange={(e) => setColor(e.target.value)}
        value={color}
        type="text"
        placeholder="MyInput"
        className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[370px] p-2.5 px-4"
      />
    </div>
  );
};

export default MyInput;
