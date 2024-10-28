import React, { useState, useEffect } from 'react'
import Keyboard from './Keyboard'
import RenderCompletedWord from './RenderCompletedWord'
import {getWord} from "./getWord"


const Wordle = () => {

    const [word, setWord] = useState(getWord())
    const [guess, setGuess] = useState('')
    const [guesses, setGuesses] = useState(['', '', '', '', ''])
    


    useEffect(() => {
        window.addEventListener('keypress', (e) => {
            if(guess.length < 5) {
                setGuess(guess + e.key.toUpperCase())
            }
        })
    }, [])

    return (
        <div className='w-full'>

            <p className='font-semibold text-2xl text-center mb-2'>Wordle</p>
            <p className='text-center mb-2'>Word: {word}</p>
            
            <div className="w-fit mx-auto">
                <div className='flex flex-col w-fit mx-auto gap-2 mb-4'>
                    {guesses.map((guess) => (
                        <>
                            {word && RenderCompletedWord(guess, word.toUpperCase())}
                        </>
                    ))}
                </div>
                
                <button onClick={() => {}} className='w-full my-4 mx-auto bg-indigo-500 px-4 py-2 rounded-md text-white font-semibold hover:bg-indigo-600 active:bg-indigo-700 transition duration-200 ease-in'>
                    Guess Word
                </button>
            </div>

            <Keyboard />

        </div>
    )
}

export default Wordle