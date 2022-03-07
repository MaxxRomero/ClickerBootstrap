//Vars
let monedas = 0;
let cantidadProduceItem = [1,2,4,5,10];
let cantidadProduceAnimal = [1,2,4,5,6];
let inventario = [0,0,0,0,0];
let contador = document.getElementById('contador');
let imgClicker = document.getElementById('img-clicker');

//Event Listeners
cargarEventos();

function cargarEventos(){
    imgClicker.addEventListener('click', clickBtn);
    
    //Comprar items y actualizar inventario
    document.getElementById('trowel').addEventListener('click',function(){comprarItem(10,0)});
    document.getElementById('tractor').addEventListener('click',function(){comprarItem(15,1)});
    document.getElementById('scythe').addEventListener('click',function(){comprarItem(20,2)});
    document.getElementById('barn').addEventListener('click',function(){comprarItem(25,3)});
    document.getElementById('farmer').addEventListener('click',function(){comprarItem(30,4)});

    //Comprar personajes y seleccionarlos
    document.getElementById('chancho').addEventListener('click',function(e){comprarPj(0,e)});
    document.getElementById('vaca').addEventListener('click',function(e){comprarPj(10,e)});
    document.getElementById('gallo').addEventListener('click',function(e){comprarPj(15,e)});
    document.getElementById('oveja').addEventListener('click',function(e){comprarPj(20,e)});
    document.getElementById('burro').addEventListener('click',function(e){comprarPj(25,e)});
}


//Meter los animales en objetos para que sea mas facil acceder a ellos .
// Limitar la cantidad de productos que se puedan comprar pusheandolos a una array dsp midiendo el length

//Funciones
function clickBtn(){
    monedas++;
    contador.innerHTML = `${monedas}`;
}

//Funcion que compra o selecciona un personaje
function comprarPj(precio,e){  
    let imagenAnimal = e.target;
    if(imagenAnimal.classList.contains('disponible')){
        seleccionarPj(e);
    }else if(monedas >= precio){
        monedas -= precio;
        cambiarDisponible(e);
    }else{
        mostrarAlerta();
    }
}

//Volver un pj disponible al comprarlo
function cambiarDisponible(e){
    let imagenAnimal = e.target;
    let h4 = imagenAnimal.parentElement.firstElementChild;
    imagenAnimal.className = 'disponible';
    if(h4.classList.contains('precio-animal')){
        h4.remove();
        alert('Comprar');
    }
}

//Cambio de personaje
function seleccionarPj(e){
    let imagenAnimal = e.target;
    if(imagenAnimal.classList.contains('disponible')){
        alert('Cambiar');
        imgClicker.src = e.target.src;
        // descripcionAnimal();
        //TODO: CAMBIAR NOMBRE DEL ANIMAL Y CUANTAS MONEDAS GENERA
    }
}


// function descripcionAnimal(){

// }



//TODO: Funciona a medias HACERLO CON BEFORE
//Alerta no hay suficientes clicks
function mostrarAlerta(){
    let alerta = document.getElementById('alerta');
    alerta.style.opacity = 1; 
    alerta.className = 'alert alert-danger text-center m-auto';
    setTimeout(function fadeOut(){
        alerta.style.opacity = 0; 
      }, 2000);
}

//////////////////////////////////////////////////////////////

//Comprar Items
function comprarItem(precio,slotInv){
    if(monedas >= precio){
      monedas -= precio;
      inventario[slotInv] += 1;
      agregarItemInv(slotInv);
    }else{
        alert('No hay suficientes monedas');
    }
}

//Actualizar inventario
function agregarItemInv(slotInv){
    const img = document.createElement('img');
    img.className = 'img-inventario mr-3 mt-3';
    
    if(slotInv === 0){
        img.src = 'img/trowelgrande.png';
        document.getElementById('div-trowel').appendChild(img);
    } else if(slotInv === 1) {
        img.src = 'img/tractorgrande.png';
        document.getElementById('div-tractor').appendChild(img);
    } else if(slotInv === 2) {
        img.src = 'img/scythe.png';
        document.getElementById('div-scythe').appendChild(img);
    } else if(slotInv === 3) {
        img.src = 'img/barn.png';
        document.getElementById('div-barn').appendChild(img);
    } else if(slotInv === 4) {
        img.src = 'img/farmergrande.png';
        document.getElementById('div-farmer').appendChild(img);
    }

    // TODO: LIMITAR CANTIDAD DE OBJETOS AL COMPRAR A 5
    // while () {
        
    // }
}

function actualizarInv() {
    contador.innerHTML = `${monedas}`;
}
  
//Funcion para generar automaticamente
function prodAuto(){
for(i=0;i<inventario.length;i++){
    monedas += inventario[i] * cantidadProduceItem[i];
};
}

//TODO: que cada animal produzca automaticamente como los items
// function prodAutoAnimal(){

// }

  
//Actualizar clicks y produccion automatica
var FPSProduce = 1; 
  
setInterval(function() {
    prodAuto();
}, 1000/FPSProduce);
  
var FPS = 30;
  
setInterval(function() {
    actualizarInv();
}, 1000/FPS);


