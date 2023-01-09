const container = document.querySelector("#container");


//loop to create 256 squares to put inside container
for(let i = 0; i < 256; i++)
{
const div = document.createElement('div');
div.classList.add("square");


container.appendChild(div);
}

const button = document.querySelectorAll(".square");

let squareArray = Array.from(button);

function changeColor(event){
   
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeColor(event){
    if( event.type === "mouseenter" && mouseDown){
        event.target.style.backgroundColor = "white";
    }
};

squareArray.forEach(item => {
    item.addEventListener("mouseenter" , changeColor);
    item.addEventListener("mousedown", changeColor);
});

// squareArray.forEach(item => {
// item.addEventListener("mouseenter" , () => {
//     item.style.cssText = " background-color: white;";

// });

//     });










