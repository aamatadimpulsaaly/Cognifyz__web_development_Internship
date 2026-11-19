let button = document.getElementById("btn");
let colors = ["red", "blue", "green", "purple", "orange", "white", "pink"];
button.onclick = function() {
    let randomIndex = Math.floor(Math.random() * 7);
    let randomColor = colors[randomIndex];
    button.style.backgroundColor = randomColor;
};