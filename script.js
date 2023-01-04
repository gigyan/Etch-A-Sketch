const container = document.querySelector("#container");

//loop to create 256 squares to put inside container
for(let i = 0; i < 256; i++)
{
const div = document.createElement('div');
div.classList.add("square");


container.appendChild(div);
}





