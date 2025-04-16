import React from "react";
import clsx from "clsx";
const Inputs = (props) => {
  const isGuessed = props.gussedLetters.includes(props.letter);
  const isCorrect = props.currentWord
    .toUpperCase()
    .split("")
    .includes(props.letter);
  const isWrong = isGuessed && !props.currentWord.includes(props.letter);

  const buttonClass = clsx({
    "btn-right": isGuessed && isCorrect,
    "btn-wrong": isGuessed && !isCorrect,
    "btn-disabled": props.gameOver,
  });
  const handleClick = () => {
    if (props.gameOver === true) {
      return;
    }
    props.setGussedLetters((prevLetters) =>
      [...prevLetters].includes(props.letter)
        ? [...prevLetters]
        : [...prevLetters, props.letter]
    );
  };
  return (
    <button
      aria-label={`Letter ${props.letter}`}
      aria-disabled={props.gussedLetters.includes(props.letter)}
      className={buttonClass}
      disabled={props.gameOver}
      onClick={handleClick}
    >
      {props.letter}
    </button>
  );
};

export default Inputs;
