
function addDivBox(n){
  
  
}

function addRows(n){
    for(r=0; r<n; r++){
    const newRow= document.createElement('div');
    newRow.classList= "row";
    newRow.setAttribute('id',"row"+r);
    container.append(newRow);
    addColumns(n);
    }
}

function addColumns(n){
    const cellWidth= 100/n+"%";
    for(c=0; c<n ; c++){
    const newBox = document.createElement('div');
    const targetRow = document.getElementById('row'+r);
    newBox.classList="cell";
    newBox.setAttribute('width',cellWidth);
    newBox.setAttribute('heigth',cellWidth);
    targetRow.appendChild(newBox);
    }
}

function clearCells(){
  // clrBtn.addEventListener('click',() =>{
    cells.forEach((cell) => {
        cell.style.backgroundColor= "white";
   })
}



const container = document.querySelector('#container');
let r= 0;
let c= 0;
addRows(16);

const clrBtn = document.querySelector('#clear');
const cells = document.querySelectorAll('.cell');


cells.forEach((cell) =>{
    cell.addEventListener('mouseover',() =>{
        //changeColor();
        //cell.setAttribute('background-color','blue');
        cell.style.backgroundColor = "blue";
    })
    

    }
)
clrBtn.addEventListener('click',() =>{
    cells.forEach((cell) => {
        cell.style.backgroundColor= "white";
   })
}
)