const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// targetando o botão e o span
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    //mudar a cor do background
    document.body.style.backgroundColor = colors[randomNumber];
    //mudar o conteúdo de texto de um nó, no caso a tag span. 
    color.textContent = colors[randomNumber];
});

// função para gerar um número aleatório que será usado para acessar o array de cores
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}