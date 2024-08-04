const display = document.getElementById('binaryResult');

function convertToBinary() {
    decimalNumber = document.getElementById('decimalInput').value;

    // Vérifier si l'entrée est un nombre et non négatif
    if (isNaN(decimalNumber) || decimalNumber < 0) {
        throw new Error("L'entrée doit être un nombre non négatif.");
    }

    // Cas spécial pour 0
    if (decimalNumber === 0) {
        return "0";
    }

    let binaryResult = "";

    // Boucle pour diviser le nombre par 2 et collecter les restes
    while (decimalNumber > 0) {
        let remainder = decimalNumber % 2;
        console.log(remainder);
        binaryResult = remainder + binaryResult; // Ajouter le reste au début de la chaîne
        decimalNumber = Math.floor(decimalNumber / 2); // Mettre à jour le nombre avec le quotient
    }

    display.innerHTML = binaryResult;
}


