let coffeeImg = document.getElementsByClassName("coffee_img")[0];
let img = document.createElement("img");

fetch("https://coffee.alexflipnote.dev/random.json")
  .then((response) => response.json())
  .then((data) => {
    img.src = data.file
    coffeeImg.appendChild(img)}
);


setTimeout(function(){
    location.reload();
}, 3000);