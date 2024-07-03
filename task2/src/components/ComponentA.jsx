import React from "react";
import { ComponentB } from "./Combine.js";

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <ComponentB count={count} setCount={setCount} />
    </div>
  );
};

export default App;
