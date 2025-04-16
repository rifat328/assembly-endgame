import { useState } from "react";
import "./App.css";
import { languages } from "./languages.js";
import Heading from "./component/Heading";
import Status from "./component/Status";
import Languages from "./component/Languages";
import Inputs from "./component/Inputs";
import { nanoid } from "nanoid";
import { randomWord } from "./utility.js";
import clsx from "clsx";
/*# What are the main containers of elements 
    i need in this app?
    => * need heading and sub headings , then game won and loss section based on
    conditional rendering,
    lebels as programming language , 8* input field for each charecter of word
    * full set of charecter keybord section 
    * Render new game button on when game won/loss 
    *  

  # What values will be needed to be saved in state
    vs what values can be derived from state?
    => * randomly generated word can be stored on state,
       * input char can be stored based on that we change field content 

  #How will the user interact with the app? What
 *   events do I need to handle?
 *  => * user click and that char will apper on screen from 
 * right to left 
 * * if clicked char mached with stored word then 
 * no change of color on input field char 
 * if not it char will turned red and a programming language will be eleminated ,
 * also that keybord button will turned red . other wise green if correct
 *  => so we need keydown and clicked event  
 * 
 * */
function App() {
  // State Values
  const [currentWord, setCurrentWord] = useState(() => randomWord());
  const [gussedLetters, setGussedLetters] = useState([]);
  console.log(`currentWord :${currentWord}`);
  //Derived Value
  const numberOfGuessLeft = languages.lengthm - 1;
  let wrongGuessCount = gussedLetters.filter(
    (letter) => !currentWord.includes(letter.toLowerCase())
  ).length;

  //wrongGuessCount & index & loss class
  const language = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessCount;

    return (
      <Languages
        key={lang.name}
        name={lang.name}
        backgroundColor={lang.backgroundColor}
        color={lang.color}
        className={isLanguageLost ? "lost" : ""}
      />
    );
  });

  //  Alternative approach with reducer()-------
  //  const wrongGuessCount = gussedLetters.reduce((count, letter) => {
  //   return currentWord.toLowerCase().includes(letter.toLowerCase())
  //     ? count
  //     : count + 1;
  // }, 0);
  console.log(wrongGuessCount);

  const letterElements = currentWord
    .split("")
    .map((char) => (
      <span key={nanoid()}>
        {gussedLetters.includes(char.toUpperCase()) ? char.toUpperCase() : ""}
      </span>
    ));
  //--------------------------------------------------------------------------------------------------------------------??
  //Feature : fareWell Message by language
  const lastGuessedLetter = gussedLetters[gussedLetters.length - 1];
  const isLastGusessedLetterIncorrect =
    lastGuessedLetter &&
    !currentWord.toUpperCase().split("").includes(lastGuessedLetter);
  console.log(`currentWord :${currentWord}`);
  console.log(`gussedLetters :${gussedLetters}`);
  console.log(`lastGuessedLetter :${lastGuessedLetter}`);
  console.log(
    `isLastGusessedLetterIncorrect :${isLastGusessedLetterIncorrect}`
  );

  const isGameWon = currentWord
    .toUpperCase()
    .split("")
    .every((letter) => gussedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  //----------------------------------------------------------
  // keyboard
  //----------------------------------------------------------
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const inputes = alphabet
    .split("")
    .map((char, index) => (
      <Inputs
        key={index}
        gussedLetters={gussedLetters}
        setGussedLetters={setGussedLetters}
        currentWord={currentWord}
        letter={char.toUpperCase()}
        gameOver={isGameOver}
      />
    ));

  // const isGameOver = () => {
  //   if (wrongGuessCount > language.length - 1) {
  //     wrongGuessCount = language.length - 1;
  //   }
  //   language.length - 1 === wrongGuessCount || isCorrect ? true : false;
  // };

  //Status objects to be passed as props to set status section

  console.log(`is game won : ${isGameWon}`);
  console.log(`is guessed Letters : ${gussedLetters}`);
  console.log(wrongGuessCount);
  console.log(`isGameOver ${isGameOver}`);
  const newGame = () => {
    setGussedLetters([]);
    setCurrentWord(randomWord());
  };

  /**
   * Backlog:
   *
   * ✅- >>Farewell messages in status section [Done]
   *!✅- Fix a11y issues
   * ✅ Make the new game button work (Half Done)
   * ✅ Choose a random word from a list of words
   * - Confetti drop when the user wins.
   * ✅ Game End App Broke Bug Fix needed.
   */
  console.log(
    "first render languages[wrongGuessCount - 1].name :::" +
      languages[wrongGuessCount].name
  );
  // language={languages[wrongGuessCount - 1].name}
  return (
    <>
      <Heading />

      <Status
        gameOver={isGameOver}
        gameWon={isGameWon}
        gameLost={isGameLost}
        isLastGusessedLetterIncorrect={isLastGusessedLetterIncorrect}
        wrongGuessCount={wrongGuessCount}
      />

      <div className="language-container">{language}</div>
      <section className="word">{letterElements}</section>

      {/* Combined visually-hidden aria-live region for status updates #A11y Apply*/}
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {currentWord.includes(lastGuessedLetter)
            ? `Correct! The letter is ${lastGuessedLetter} is in the word`
            : `Sorry , the letter ${lastGuessedLetter} is not in the word`}
          You have {numberOfGuessLeft} attempts left.
        </p>
        <p>
          Current word :
          {currentWord
            .split("")
            .map((letter) =>
              gussedLetters.includes(letter) ? letter + "." : "blank"
            )
            .join(" ")}
        </p>
      </section>

      <section className="keyboard">{inputes}</section>
      <section className="button-container">
        {isGameOver && (
          <button className="new-game" onClick={newGame}>
            New Game
          </button>
        )}
      </section>
    </>
  );
}

export default App;
