function addRows(){
    const cellsNum = document.getElementById('cellsNum');
    n= cellsNum.value;
    console.log(n);
    if (n>90) return alert("Numbers only lower than 90 please")
    removeChilds(container);
    for(r=0; r<n; r++){
    const newRow= document.createElement('div');
    newRow.classList= "row";
    newRow.setAttribute('id',"row"+r);
    container.append(newRow);
    addColumns(n);
   
    }
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) =>{
        cell.addEventListener('mouseover',() =>{
            //changeColor();
            //cell.setAttribute('background-color','blue');
            cell.style.backgroundColor = "blue";
        })
    })
    clrBtn.addEventListener('click',() =>{
        cells.forEach((cell) => {
            cell.style.backgroundColor= "white";
       })
    })
    
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

const removeChilds = (parent) => {
    while(parent.lastChild){
        parent.removeChild(parent.lastChild);
    }
}

function clearCells(){
  // clrBtn.addEventListener('click',() =>{
    cells.forEach((cell) => {
        cell.style.backgroundColor= "white";
   })
}


const input= document.querySelector('#cellsNum');


const container = document.querySelector('#container');
let r= 0;
let c= 0;


const clrBtn = document.querySelector('#clear');
const cells = document.querySelectorAll('.cell');


