const btn = document.getElementById('myButton');

btn.addEventListener('click', displayMessage)

function displayMessage(){
    const content = '<p>Bonjour, vous avez cliqué sur le bouton !</p>';
    document.getElementById('message').textContent = content;
}