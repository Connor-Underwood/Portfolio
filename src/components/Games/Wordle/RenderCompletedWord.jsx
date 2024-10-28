import { evaluateWord } from './evaluateWord' 

const RenderCompletedWord = (guess, answer) => {

    let colors = evaluateWord(guess.toUpperCase(), answer.toUpperCase())

    return (
        <div className='flex gap-2'>
            {[0, 1, 2, 3, 4].map((idx) => (
                <>
                    {
                        colors[idx] === 'G' ?
                        <div className='bg-green-600 rounded-md w-12 h-12 inline-flex items-center justify-center flex-shrink-0'>
                            <p className='font-semibold text-lg capitalize'>{guess[idx]}</p>
                        </div>
                        :
                        colors[idx] === 'Y' ? 
                        <div className='bg-yellow-600 rounded-md w-12 h-12 inline-flex items-center justify-center flex-shrink-0'>
                            <p className='font-semibold text-lg capitalize'>{guess[idx]}</p>
                        </div>
                        :
                        <div className='bg-gray-700 rounded-md w-12 h-12 inline-flex items-center justify-center flex-shrink-0'>
                            <p className='font-semibold text-lg capitalize'>{guess[idx]}</p>
                        </div>
                    }
                </>
            ))}
        </div>
    )
}

export default RenderCompletedWord