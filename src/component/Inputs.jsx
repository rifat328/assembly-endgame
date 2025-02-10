import React from "react";

const Inputs = (props) => {
  // const gussedLetter = (letter) => {
  //   setGussedLetters((letter) => [...gussedLetters].push(letter));
  // };
  const handleClick = () => {
    props.setGussedLetters((prevLetters) =>
      [...prevLetters].includes(props.letter)
        ? [...prevLetters]
        : [...prevLetters, props.letter]
    );
  };
  return <button onClick={handleClick}>{props.letter}</button>;
};

export default Inputs;
