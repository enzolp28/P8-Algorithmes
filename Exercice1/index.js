//votre code ici
function pairNumbers(numMin, numMax) {
    let result = ""
    for (let i = numMin; i <= numMax; i++) {
        if (i % 2 === 0) {
            result += i
            if (i < numMax) {
                result += ','
            }

        }
    }
    return result
}
export default pairNumbers
