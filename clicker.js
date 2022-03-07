//Variables
let galletas = 0;
let cantidadProduce = [1,2,4];
let inventario = [0,0,0];
let contador = document.getElementById('contador');
let stats = document.getElementById('stats');

//Funciones
function clickBtn() {
  galletas++;
  contador.innerHTML = `${galletas}`;
}

//Mostrar cartel error
function fadeInOut(){
  document.querySelector('.sign').style.opacity = 1; 
  document.querySelector('.sign').style.display = "block";
  setTimeout(function fadeOut(){
    document.querySelector('.sign').style.opacity = 0; 
  }, 2000);
}

//comprar
function comprar(precio,slotInv){
    if(galletas >= precio){
      galletas -= precio;
      inventario[slotInv] += 1;
    }else {
      fadeInOut();
  } 
}

//Actualizar inventario
function actualizarInv() {
  contador.innerHTML = `${galletas}`;
  stats.innerHTML = `
    <p>CURSOR: ${inventario[0]}</p>
    <p>ABUELITA: ${inventario[1]}</p>
    <p>HORNO: ${inventario[2]}</p>
  `;
}

//Funcion para generar automatico
function prodAuto(){
  for(i=0;i<inventario.length;i++){
    galletas += inventario[i] * cantidadProduce[i];
  };
}


//Actualizar clicks y produccion automatica
var FPSProduce = 1; 

setInterval(function() {
  prodAuto();
}, 1000/FPSProduce);

var FPS = 30;

setInterval(function() {
  actualizarInv();
}, 1000/FPS);