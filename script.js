const container = document.querySelector("#container");


//loop to create 256 squares to put inside container
for(let i = 0; i < 256; i++)
{
const div = document.createElement('div');
div.classList.add("square");


container.appendChild(div);
}

const square = document.querySelectorAll(".square");

let squareArray = Array.from(square);


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

let gridBtn = document.querySelector("#squareSize");


function changeGrid(){
  
 let newGrid = prompt("Enter in grid size");

 let newGridSize = Math.pow(newGrid , 2);

while(container.hasChildNodes()){
    container.removeChild(container.firstChild);
};



for(let i = 0; i < newGridSize; i++)
{
const div = document.createElement('div');
div.classList.add("square");


container.appendChild(div);
}

};

gridBtn.addEventListener("click", changeGrid);











