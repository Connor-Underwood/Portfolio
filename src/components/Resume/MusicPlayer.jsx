import React, { useEffect, useState } from 'react'
import Slider from "./Slider"
import {ChevronDoubleLeftIcon, ChevronDoubleRightIcon, MusicNoteIcon, PauseIcon, PlayIcon} from "@heroicons/react/solid"
import { ArrowsExpandIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'

const fakeMusic = [
    {title: "Bach Partita no. 2 - Chaconne", audio: '', duration: 600},
    {title: "Mendelssohn Violin Concerto", audio: '', duration: 500},
    {title: "Paganini Caprice no. 20", audio: '', duration: 300}
]

const getRandomNum = () => {
    return Math.floor(Math.random() * 16)
}

const PlayAnimation = () => {
    return (
        <div className="grid grid-cols-4 items-center w-fit gap-1 h-4">
            {[0, 1, 2, 3].map(() => (
                <motion.div
                    className='w-1 bg-white'
                    initial={{height: getRandomNum()}}
                    animate={{height: getRandomNum()}}
                    transition={{duration: 0.2, yoyo: Infinity}}
                />
            ))}
        </div>
    )
}

const MusicPlayer = () => {

    const [song, setSong] = useState(fakeMusic[0])

    const handleSongChange = ({increment}) => {
        let idx = fakeMusic.indexOf(song)
        if(increment < 1) {
            if(idx === 0) {
                setSong(fakeMusic[fakeMusic.length - 1])
            }
            else {
                setSong(fakeMusic[idx - 1])
            }
        }
        else {
            if(idx === fakeMusic.length - 1) {
                setSong(fakeMusic[0])
            }
            else {
                setSong(fakeMusic[idx + 1])
            }
        }
    }

    const [playing, setPlaying] = useState(false)

        
    return (
        <div className='my-4 max-w-xl w-full mx-auto p-4 bg-gray-700 shadow-lg shadow-indigo-500/40 rounded-lg'>
            
            {song &&
                <>
                    <div className='mb-4 flex gap-2 items-center'>
                        <div className='rounded-md w-8 h-8 flex items-center justify-center bg-indigo-500'>
                            <MusicNoteIcon className='text-white w-6 h-6' />
                        </div>
                        <p className='font-semibold'>{song.title}</p>
                        {playing && <PlayAnimation /> }
                    </div>
                    <Slider min={0} max={song.duration} step={1} initValue={0} playing={playing} />
                </>
            }
            
            
            <div className="flex items-center gap-4 justify-center">
                <button onClick={() => handleSongChange(-1)} className='w-10 h-10 rounded-full text-white inline-flex items-center flex-shrink-0 justify-center hover:bg-gray-600 active:bg-gray-700 transition duration-200 ease-in'>
                    <ChevronDoubleLeftIcon className='w-8 h-8' />
                </button>

                <button className='w-10 h-10 rounded-full text-white inline-flex items-center flex-shrink-0 justify-center hover:bg-gray-600 active:bg-gray-700 transition duration-200 ease-in'>
                    {playing ? 
                        <PauseIcon onClick={() => setPlaying(false)} className='w-10 h-10' />
                        :
                        <PlayIcon onClick={() => setPlaying(true)} className='w-10 h-10' />
                    }
                </button>

                <button onClick={() => handleSongChange(1)} className='w-10 h-10 rounded-full text-white inline-flex items-center flex-shrink-0 justify-center hover:bg-gray-600 active:bg-gray-700 transition duration-200 ease-in'>
                    <ChevronDoubleRightIcon className='w-8 h-8' />
                </button>
            </div> 
        </div>
    )
}

export default MusicPlayer