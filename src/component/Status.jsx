import React from "react";
import { languages } from "../languages";
import { getFarewellText } from "../utility";
const Status = (props) => {
  //! Styles {Conditional}
  const background = props.gameOver
    ? props.gameWon
      ? { backgroundColor: gameWonObject.backgroundColor, color: "#F9F4DA" }
      : { backgroundColor: gameLostObject.backgroundColor, color: "#F9F4DA" }
    : !props.gameOver && props.isLastGusessedLetterIncorrect
    ? {
        backgroundColor: "#7A5EA7",
        color: "#F9F4DA",
        fontStyle: "italic",
        fontWeight: "400",
        border: "1px dashed #323232",
      }
    : {};
  //

  // console.log(
  //   `props.isLastGusessedLetterIncorrect ${props.isLastGusessedLetterIncorrect}`
  // );
  return (
    //! Render {{Conditional}}
    <div
      className="status-section"
      style={background}
      aria-live="polite"
      role="status"
    >
      {!props.gameOver && props.isLastGusessedLetterIncorrect ? (
        <>
          <p className="farewell-message">
            {getFarewellText(languages[props.wrongGuessCount - 1].name)}
          </p>
        </>
      ) : props.gameWon ? (
        <>
          <h2>{gameWonObject.heading}</h2>
          <p>{gameWonObject.message}</p>
        </>
      ) : props.gameLost ? (
        <>
          <h2>{gameLostObject.heading}</h2>
          <p>{gameLostObject.message} </p>
        </>
      ) : null}
    </div>
  );
};

export default Status;

// style={{ backgroundColor: props.gameStat.backgroundColor }}
const gameWonObject = {
  heading: "You Win!",
  message: "Well Done! 🎉",
  backgroundColor: "#10A95B",
};

const gameLostObject = {
  heading: "Game over!",
  message: "You lose! Better start Learning Assembly 😭",
  backgroundColor: "#BA2A2A",
};
