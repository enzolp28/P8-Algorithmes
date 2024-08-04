//votre code ici
function pairNumbers(numMin, numMax) {
    let result = ""
    if (numMax % numMin === 0) {
        for (let i = numMin; i <= numMax; i += 2) {
            result += i
            if (i < numMax) {
                result += ','
            }
        }
    } else {
        console.log('Chiffre impaire')
    }
    return result
}
export default pairNumbers
