import React, { useState } from 'react'
import Wordle from './Wordle/Wordle'

const Games = () => {
    return (
        <div className='bg-gray-800 text-white min-h-screen p-4 w-full inline-flex flex-shrink-0 items-center justify-center'>
            <Wordle />
        </div>
    )
}

export default Games