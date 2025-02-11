import React from "react";
import clsx from "clsx";
const Inputs = (props) => {
  // const isRight = props.gussedLetters.includes(props.letter) ? true : false;
  // const isWrong =
  //   props.gussedLetters.includes(props.letter) === false ? true : false;
  const isGuessed = props.gussedLetters.includes(props.letter);
  const isCorrect = props.currentWord
    .toUpperCase()
    .split("")
    .includes(props.letter);
  const buttonClass = clsx({
    "btn-right": isGuessed && isCorrect,
    "btn-wrong": isGuessed && !isCorrect,
  });
  const handleClick = () => {
    props.setGussedLetters((prevLetters) =>
      [...prevLetters].includes(props.letter)
        ? [...prevLetters]
        : [...prevLetters, props.letter]
    );
  };
  return (
    <button className={buttonClass} onClick={handleClick}>
      {props.letter}
    </button>
  );
};

export default Inputs;
