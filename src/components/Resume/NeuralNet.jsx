import React, { useState } from 'react'
import LineTo from 'react-lineto';

const NeuralNet = () => {
    return (
        <div className='flex items-center justify-between w-48'>
            <div className='grid grid-rows-3 gap-4'>
                <div className='w-6 h-6 bg-indigo-500 rounded-full'>
                    <div className="in-1" />
                </div>
                <div className='w-6 h-6 bg-indigo-500 rounded-full'>
                    <div className="in-2" />
                </div>
                <div className='w-6 h-6 bg-indigo-500 rounded-full'>
                    <div className="in-3" />
                </div>
            </div>
            <div className='grid grid-rows-2 gap-4'>
                <div className='w-6 h-6 bg-indigo-500 rounded-full'>
                    <div className="out-1" />
                </div>
                <div className='w-6 h-6 bg-indigo-500 rounded-full'>
                    <div className="out-2" />
                </div>
            </div>
            {['in-1', 'in-2', 'in-3'].map((start) => (
                <>
                    <LineTo from={start} fromAnchor="center center" to='out-1' toAnchor="center center" borderColor='rgb(99, 102, 241)' />
                    <LineTo from={start} to='out-2' borderColor='rgb(99, 102, 241)' />
                </>
            ))}
        </div>
    )
}

export default NeuralNet