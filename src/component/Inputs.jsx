import React from "react";

const Inputs = (props) => {
  // const gussedLetter = (letter) => {
  //   setGussedLetters((letter) => [...gussedLetters].push(letter));
  // };
  return (
    <button onClick={() => [...gussedLetters, props.letter]}>
      {props.letter}
    </button>
  );
};

export default Inputs;
