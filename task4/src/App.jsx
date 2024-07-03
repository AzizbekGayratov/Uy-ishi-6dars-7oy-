import React from "react";
import { Container, MyInput } from "./components/Combine.js";

const App = () => {
  const [color, setColor] = React.useState("black");

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <Container color={color} />
      <MyInput color={color} setColor={setColor} />
    </div>
  );
};

export default App;
