
import {useState} from "react";
import {randomWord} from "../src/Word";


import img0 from '../src/image/img0.png';
import img1 from '../src/image/img1.png';
import img2 from '../src/image/img2.png';
import img3 from '../src/image/img3.png';
import img4 from '../src/image/img4.png';
import img5 from '../src/image/img5.png';
import img6 from '../src/image/img6.png';

function FxHangman()  {
    // State variables
    const {maxWrong, images} = FxHangman.defaultProps;
    const [nWrong, setNWrong ] = useState(0)
    const [guessed, setGuessed] = useState(new Set())
    const [group, setGroup] = useState('colors');
    const [answer, setAnswer] = useState(randomWord())

    // Reset function
    const reset = () => {
        setNWrong(0)
        setGuessed(new Set())
        setAnswer(randomWord())
        setGroup('colors')
    }
    
    
    // guessed Word
    const guessedWord = () => {
        return answer.split('').map(letter => (guessed.has(letter) ? letter : "_ "))
    }
    // Keyboard letters Traitement
    const handleGuess = (e) => {
        let letter = e.target.value
        const updatedSet = new Set([...guessed, letter])
        setGuessed(updatedSet)
        setNWrong(nWrong + (answer.includes(letter) ? 0 : 1))
    }
    
    // Keyboard generator
    const generateButtons = () => {
        return   "AZERTYUIOPQSDFGHJKLMWXCVBN".split("").map((letter) => 
             (
                <button  key={letter}
                         value={letter} 
                         className="text-2xl font-serif text-cyan-400 bg-slate-950
                 hover:cursor-pointer hover:bg-slate-600 hover:text-cyan-200 disabled:bg-red-500  m-0.5 p-3 rounded-lg"
                         onClick={handleGuess}
                         disabled={guessed.has(letter)}
                         >
                            {letter}
                         </button>
            ))
        
           
    }
    const handleChange = (e) => {
        const{value} = e.target;
        setGroup(value)
        setAnswer(randomWord(value))
        setNWrong(0)
        setGuessed(new Set())
    }
    let alt = `${nWrong}/${maxWrong} guesses`;
    let isWinner = guessedWord().join("") === answer
    let gameOver = nWrong >= maxWrong
    let gamestate = generateButtons()
    if (isWinner) gamestate = "You Win!"
    if (gameOver) gamestate = "You Lose!"
  // Hangman return
            return (   
        <div id="container" class="flex flex-row justify-center items-center bg-slate-900 border-b-cyan-300 text-amber-50  m-0 p-10">
            <h1 class="text-4xl font-serif text-amber-50 ">HANGMAN {group}</h1>
            <div class="flex flex-col w-lg  justify-center items-center text-3xl font-serif p-5 m-0 btns">
                 <img src={images[nWrong]} alt={alt} class="w-1/2 h-auto"/>
                 <p className="text-3xl font-serif text-amber-50 
                   m-0.5 p-3">Guessed Wrong: {nWrong}</p>      
            </div>
            <div  class="flex flex-col w-lg  justify-center items-center text-3xl font-serif p-5 m-0 btns">
                <p class="p-5">{gameOver ? answer : guessedWord()}</p>       
                <div class="w-lg p-5 m-5 items-stretch justify-center">{gamestate}</div> 
            </div>
            <div id='Hangman-reset'>
                <button id="reset" value="colors" onClick={reset} className="text-2xl font-serif text-cyan-400 bg-slate-950
                 hover:cursor-pointer hover:bg-slate-600 hover:text-cyan-200 m-0.5 p-3 rounded-lg">Restart?</button>
                <form>
                    <label htmlFor="group" className="text-2xl font-serif text-amber-50 
                   m-0.5 p-3">Guess About:</label>
                    <select name="group" id="group" value={group} onChange={handleChange} class="
                    text-2xl font-serif text-cyan-400
                     bg-slate-950 hover:cursor-pointer
                     hover:bg-slate-600
                     hover:text-cyan-200 m-0.5 p-3 rounded-lg">
                        <option value="COLORS">Colors</option>
                        <option value="COUNTRIES">Countries</option>
                        <option value="ANIMALS">Animals</option>
                        </select>
                </form>
            </div>
         </div>
    );
}
// Default props for the component
FxHangman.defaultProps = {
    maxWrong: 6,
    images: [
        img0,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6
    ]
}
// Function to get a random word from the list



export default FxHangman;