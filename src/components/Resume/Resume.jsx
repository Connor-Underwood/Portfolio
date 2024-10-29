import React from "react"

import { DownloadIcon } from "@heroicons/react/solid"


const Resume = () => {

    return (
        <div>
           <a href="./Connor_Underwood_2024_Resume.pdf">
                <button
                    //onClick={downloadResume}
                    className='bg-indigo-500 mb-4 mt-2 ml-auto block rounded-full px-6 py-3 hover:shadow-xl hover:shadow-indigo-500/20 active:shadow-none transition duration-200 ease-in'
                >
                    <p className='font-semibold text-white flex items-center gap-2'>
                        Download Resume <DownloadIcon className='w-5 h-5' />
                    </p>
                </button>
            </a>
            <img className="max-w-2xl mx-auto rounded-lg" src="./Connor_Underwood_2024_Resume-1.png" alt="resume" />
            
                      
            
        </div>
    )
}

export default Resume
