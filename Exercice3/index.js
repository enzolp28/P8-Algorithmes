// Créez votre fonction ici
function calculateAverage(arrNum){
    if(arrNum === undefined || arrNum.length === 0){
        return 'No numbers to calculate average'
    }
    let sumNum = 0
    for (let i = 0; i < arrNum.length; i++) {
        sumNum += arrNum[i];
    }
    return sumNum / arrNum.length
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
