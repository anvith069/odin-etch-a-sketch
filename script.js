const cont=document.querySelector("#container");
const butn=document.querySelector('#butun');
let squareGridRef1=[];
let squareGridRef2=[];

let n=16;
grid(n);
butn.addEventListener('click',()=>{
    let y = window.prompt('Enter no of squares per side(<101)',16);
    n=(y>0&&y<101)?y:16;
    grid(n);
});
function grid(n){
    cont.innerHTML='';
    squareGridRef1 = [];
    squareGridRef2 = [];
    
for (let i = 0; i < n; i++) { 
    
    const smlCont = document.createElement('div'); 
    smlCont.classList.add('sml-cont'); 
    cont.appendChild(smlCont); 
    squareGridRef1.push(smlCont); 
    
    const currentRow = []; 
    
    for (let j = 0; j < n; j++) { 
        const sqDiv = document.createElement('div'); 
        sqDiv.classList.add('sq-div'); 
        smlCont.appendChild(sqDiv); 
        currentRow.push(sqDiv); 
        sqDiv.abc=0;
        sqDiv.addEventListener('mouseenter', () => {
            sqDiv.style.transition = 'none'; 
            sqDiv.style.backgroundColor = getRandomRGB();
            if(sqDiv.abc<10) sqDiv.abc++;
            sqDiv.style.filter=`brightness(${1-(0.1*sqDiv.abc)})`;
        });
    } 
    squareGridRef2.push(currentRow); 
}
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomRGB() {
  const r = getRandomInt(256);
  const g = getRandomInt(256);
  const b = getRandomInt(256);
  return `rgb(${r}, ${g}, ${b})`;
}