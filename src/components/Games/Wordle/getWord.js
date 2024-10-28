export const getWord = () => {

    const randIdx = Math.floor(Math.random()*2315)

    let rawFile = new XMLHttpRequest();
    
    let returnedWord = ''

    rawFile.open("GET", "words.txt", false);
    rawFile.onreadystatechange = () => {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                let allText = rawFile.responseText.split("\n");
                let word = allText[randIdx]
                returnedWord = word;
            }
        }
    }
    rawFile.send(null);
    return returnedWord
}