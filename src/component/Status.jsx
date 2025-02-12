import React from "react";

const Status = (props) => {
  const background = props.gameOver
    ? props.gameWon
      ? { backgroundColor: gameWonObject.backgroundColor, color: "#F9F4DA" }
      : { backgroundColor: gameLostObject.backgroundColor, color: "#F9F4DA" }
    : {};
  return (
    <div className="status-section" style={background}>
      {props.gameOver ? (
        props.gameWon ? (
          <>
            <h2>{gameWonObject.heading}</h2>
            <p>{gameWonObject.message}</p>
          </>
        ) : (
          <>
            <h2>{gameLostObject.heading}</h2>
            <p>{gameLostObject.message} </p>
          </>
        )
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
