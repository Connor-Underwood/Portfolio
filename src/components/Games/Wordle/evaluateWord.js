//returns an array which indicates for each square if it should be yellow, green, or gray
//the main problem this solves is with rendering yellow squares, which is more complex than it initially appears
//ie. you could have a word like 'TREES', which has 2 E's
//as a guess, could put 'EEEEE' and it would show 2 greens but also 3 yellows, which shouldn't happen
//iterate once through the guess, mark any greens, iterate again, mark any yellows w/o going over the count of that letter in the word

const getTracker = () => {
    let tracker = {}
    for(var i = 65; i < 91; i++) {
        tracker[String.fromCharCode(i)] = 0;
    }
    return tracker
}

export const evaluateWord = (guess, goal) => {

    //N stands for None, G for Green, and Y for Yellow
    let colors = ['N', 'N', 'N', 'N', 'N']

    let guessTracker = getTracker()
    let goalTracker = getTracker()

    for(let i = 0; i < guess.length; i++) {
        if(guess[i] === goal[i]) {
            colors[i] = 'G'
        }
        else {
            guessTracker[guess[i]] += 1
            goalTracker[goal[i]] += 1
        }
    }

    let yellow = 0

    Object.keys(guessTracker).map(letter => {
        yellow += Math.min(goalTracker[letter], guessTracker[letter])
    })

    for(let i = 0; i < guess.length; i++) {
        if(colors[i] !== 'G') {
            if(yellow !== 0) {
                if(goal.includes(guess[i])) {
                    colors[i] = 'Y'
                    yellow -= 1
                }
            }
        }
    }

    return colors
}