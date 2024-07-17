import React, { useState } from 'react';
import "./App.css"

const App = () => {
  const [colors, setColors] = useState(Array(9).fill('white'));
  const [clickSequence, setClickSequence] = useState([]);

  const handleClick = (index) => {
    if (colors[index] === 'green' || clickSequence.length >= 9) {
      return;
    }
    const newColors = [...colors];
    newColors[index] = 'green';
    setColors(newColors);

    const newSequence = [...clickSequence, index];
    setClickSequence(newSequence);

    if (newSequence.length === 9) {
      setTimeout(() => {
        changeColorsToOrange(newSequence);
      }, 500);
    }
  };

  const changeColorsToOrange = (sequence) => {
    sequence.forEach((index, i) => {
      setTimeout(() => {
        setColors((prevColors) => {
          const newColors = [...prevColors];
          newColors[index] = 'orange';
          return newColors;
        });
      }, i * 500);
    });
  };
  return (
    
    <div className="matrix">
    {colors.map((color, index) => (
      <div
        key={index}
        className="box"
        style={{ backgroundColor: color }}
        onClick={() => handleClick(index)}
      ></div>
    ))}
  </div>
  )
}

export default App