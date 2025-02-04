import { useState } from "react";
import "./App.css";
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
  const [count, setCount] = useState(0);

  return <></>;
}

export default App;
