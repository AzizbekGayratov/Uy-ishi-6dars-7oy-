import React from "react";
import { Title, MyInput } from "./components/Combine.js";

const App = () => {
  const [text, setText] = React.useState("");

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="h-[120px] flex flex-col items-center justify-between">
        <MyInput setText={setText} text={text} />
        <Title title={text} />
      </div>
    </div>
  );
};

export default App;
