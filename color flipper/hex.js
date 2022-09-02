const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    //nosso hex color vai começar com o símbolo #
    let hexColor = "#";
    //vamos iterar 6 vezes para gerar 6 números aleatórios
    for (let i = 0; i < 6; i++) {
        //vamos chamar a função getRandomNumber() e concatenar o resultado a nossa variável hexColor
        hexColor += hex[getRandomNumber()];
        console.log(hexColor);
    }

    //mudar a cor do background e o texto do span
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

// função para gerar um número aleatório entre 0 e 15 que será usado para acessar o array hex
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
