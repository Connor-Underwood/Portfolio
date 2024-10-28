import { useState, useEffect } from 'react'

const Keyboard = (guesses, colors) => {

    let fullKeyboard = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    const firstRow = 'QWERTYUIOP'
    const secondRow = 'ASDFGHJKL'
    const thirdRow = 'ZXCVBNM'

    return (
        <div id='keyboard' className='max-w-xl w-full mx-auto'>

            <div className="flex gap-2 transition-all duration-200 ease-in my-2 justify-center">
                {firstRow.split("").map((letter) => (
                    <div 
                        key={letter} 
                        id={letter} 
                        className='p-1 max-w-12 w-full aspect-square inline-flex justify-center items-center transition-all duration-100 ease-in bg-gray-700 rounded-md'
                    >
                        <p className='text-white font-semibold'>{letter}</p>
                    </div>
                ))}
            </div>

            <div className="flex gap-2 transition-all duration-200 ease-in my-2 justify-center px-8">
                {secondRow.split("").map((letter) => (
                    <div 
                        key={letter} 
                        id={letter} 
                        className='p-1 max-w-12 w-full aspect-square inline-flex justify-center items-center transition-all duration-100 ease-in bg-gray-700 rounded-md'
                    >
                        <p className='text-white font-semibold'>{letter}</p>
                    </div>
                ))}
            </div>

            <div className="flex gap-2 transition-all duration-200 ease-in my-2 justify-center px-24">
                {thirdRow.split("").map((letter) => (
                    <div 
                        key={letter} 
                        id={letter} 
                        className='p-1 max-w-12 w-full aspect-square inline-flex justify-center items-center transition-all duration-100 ease-in bg-gray-700 rounded-md'
                    >
                        <p className='text-white font-semibold'>{letter}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Keyboard