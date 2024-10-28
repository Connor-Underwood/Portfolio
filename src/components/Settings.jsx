import { Fragment, useState, useEffect } from 'react'

import { MoonIcon, SunIcon } from '@heroicons/react/outline'

export default function Settings({open, setOpen}) {

    //dark mode stuff :)
    const [darkMode, setDarkMode] = useState(false)
    var darkModeStatus = false;

    if(typeof window !== 'undefined')
        darkModeStatus = JSON.parse(localStorage.getItem('chrisfarbs-dark'))
    
    //stores dark mode preferences in local storage
    useEffect(() => {
        if(!darkModeStatus) {
            localStorage.setItem('chrisfarbs-dark', JSON.stringify(false))
        }
        else {
            setDarkMode(darkModeStatus)
            if(darkModeStatus === true) {
                document.documentElement.classList.add('dark')
            }
            else {
                document.documentElement.classList.remove('dark')
            }
        }
    }, [darkModeStatus])

    //function ran to switch dark and light mode when button is hit
    const toggleDarkMode = () => {
        const newVal = !darkMode
        setDarkMode(newVal)
        localStorage.setItem('chrisfarbs-dark', JSON.stringify(newVal))

        if (newVal === true) {
            document.documentElement.classList.add('dark')
        } 
        else {
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <button onClick={toggleDarkMode} className='w-8 h-8 text-black dark:text-white rounded-md inline-flex justify-center flex-shrink-0 items-center bg-gray-100 dark:bg-gray-800 hover:text-primary hover:ring-2 hover:ring-primary hover:bg-white dark:hover:bg-gray-900 transition duration-200 ease-in'>
            {darkMode ? 
                <MoonIcon className='w-6 h-6' />
                :
                <SunIcon className='w-6 h-6' />
            }
        </button>
    )
}
