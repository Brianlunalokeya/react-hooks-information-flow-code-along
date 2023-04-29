import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const [color, setColor] = useState("#FFF");

  function handleChangeColor() {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColor} />
      <Child onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
