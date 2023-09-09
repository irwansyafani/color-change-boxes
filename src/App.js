import { useState } from "react";
import Desktop from "./components/desktop";
import Mobile from "./components/mobile";

function App() {
  const [colors, setColors] = useState([
    "#008ce7",
    "#fa0954",
    "#907957",
    "#c6585e",
    "#8b00d3",
    "#00b49f",
    "#007c66",
    "#6d52ff",
    "#415d6f",
  ]);

  const changeColor = () => {
    const cloned = [...colors];
    const lastColor = cloned.pop();
    cloned.unshift(lastColor);
    setColors(cloned);
  };

  return (
    <>
      <Desktop colors={colors} changeColor={changeColor} />
      <Mobile colors={colors} changeColor={changeColor} />
    </>
  );
}

export default App;
