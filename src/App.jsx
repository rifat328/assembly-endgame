import { useState } from "react";
import "./App.css";
import { languages } from "./languages.js";
import Heading from "./component/Heading";
import Status from "./component/Status";
import Languages from "./component/Languages";
import Inputs from "./component/Inputs";
import { nanoid } from "nanoid";
/*# What are the main containers of elements 
    i need in this app?
    => * need heading and sub headings , then game won and loss section based on
    conditional rendering,
    lebels as programming language , 8* input field for each charecter of word
    * full set of charecter keybord section 
    * Render new game button on when game won/loss 
    *  

  # What values will needed to be saved in state
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
 * also that keybord button will turn red . other wise green if correct
 *  => so we need keydown and clicked event  
 * 
 * */
function App() {
  const language = languages.map((lang) => (
    <Languages
      key={lang.name}
      name={lang.name}
      backgroundColor={lang.backgroundColor}
      color={lang.color}
    />
  ));
  const [currentWord, setCurrentWord] = useState("react");
  const [gussedLetters, setGussedLetters] = useState([]);
  console.log(gussedLetters);
  const letterElements = currentWord
    .split("")
    .map((char) => <span key={nanoid()}>{char.toUpperCase()}</span>);

  // keyboard
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
      />
    ));

  return (
    <>
      <Heading />
      <Status />
      <div className="language-container">{language}</div>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{inputes}</section>
      <section className="button-container">
        {<button className="new-game">New Game</button>}
      </section>
    </>
  );
}

export default App;
