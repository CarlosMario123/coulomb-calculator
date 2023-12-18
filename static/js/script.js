import { Carga } from "./modelos/Carga.js";
import { enviarData } from "./services/servicesEnviar.js";
const entradas = document.getElementById("entradas");
const ids = [1,2,3];
const resolver = document.getElementById("enviar");




function crearElemento(id) {
    // Crear el div contenedor
    const divContenedor = document.createElement('div');
    divContenedor.classList.add('flex', 'items-center', 'gap-x-2');

    // Crear el primer input
    const inputCarga = document.createElement('input');
    inputCarga.id = "carga" + id;
    inputCarga.setAttribute('type', 'number');
    inputCarga.setAttribute('placeholder', 'carga');
    inputCarga.classList.add('w-16', 'h-10', 'text-black', 'flex', 'justify-center', 'items-center');
    divContenedor.appendChild(inputCarga);

    // Crear el select
    const selectOpciones = document.createElement('select');
    selectOpciones.setAttribute('name', 'opciones');
    selectOpciones.classList.add('text-black', 'w-16', 'h-10');

    const optionMC = document.createElement('option');
    optionMC.value = 'mc';
    optionMC.textContent = 'mc';
    selectOpciones.id = "coulumb" + id;
    selectOpciones.appendChild(optionMC);

    const optionNC = document.createElement('option');
    optionNC.value = 'nc';
    optionNC.textContent = 'nc';
    selectOpciones.appendChild(optionNC);

    divContenedor.appendChild(selectOpciones);

    // Crear el segundo div con los inputs
    const divInputs = document.createElement('div');
    divInputs.classList.add('flex', 'gap-x-2');

    const p1 = document.createElement('p');
    p1.classList.add('text-3xl', 'font-black');
    p1.textContent = '(';
    divInputs.appendChild(p1);

    const inputX = document.createElement('input');
    inputX.setAttribute('type', 'number');
    inputX.setAttribute('id', 'x1');
    inputX.setAttribute('name', 'x1');
    inputX.setAttribute('placeholder', 'x');
    inputX.classList.add('text-center', 'w-10', 'h-10', 'text-black');
    inputX.id = "x"+id;
    divInputs.appendChild(inputX);

    const inputY = document.createElement('input');
    inputY.setAttribute('type', 'number');
    inputY.setAttribute('id', 'x2');
    inputY.setAttribute('name', 'x2');
    inputY.setAttribute('placeholder', 'y');
    inputY.classList.add('text-center', 'w-10', 'h-10', 'text-black');
    inputY.id = "y" + id
    divInputs.appendChild(inputY);

    const inputZ = document.createElement('input');
    inputZ.setAttribute('type', 'number');
    inputZ.setAttribute('id', 'x3');
    inputZ.setAttribute('name', 'x3');
    inputZ.setAttribute('placeholder', 'z');
    inputZ.classList.add('text-center', 'w-10', 'h-10', 'text-black');
    inputZ.id = "z" + id;
    divInputs.appendChild(inputZ);


    const p2 = document.createElement('p');
    p2.classList.add('text-3xl', 'font-black');
    p2.textContent = ')';
    divInputs.appendChild(p2);

    divContenedor.appendChild(divInputs);

    return divContenedor;
}

function crearEntradas(){
    for(let i  = 0; i < ids.length;i++){
        entradas.appendChild(crearElemento(ids[i]))
    }
  
}

crearEntradas()

//Eventos para resolver
resolver.addEventListener("click",enviarProblema)


function enviarProblema(){
    const cargas = []
    const coulumbs = []
    const vectores = []
    const objeCargas = []

//tomamos lo valores cada uno
 for(let i = 0; i < ids.length;i++){
    let numero = parseInt(document.getElementById(`carga${ids[i]}`).value)
    cargas.push(numero);
    coulumbs.push(document.getElementById(`coulumb${ids[i]}`).value);
    let vecX = parseInt(document.getElementById(`x${ids[i]}`).value)
    let vecY =parseInt( document.getElementById(`y${ids[i]}`).value)
    let vecZ = parseInt(document.getElementById(`z${ids[i]}`).value)
    let vector = [vecX,vecY,vecZ];
    vectores.push(vector)
 }
   
 for(let i = 0; i < ids.length; i++){
    objeCargas.push(new Carga(cargas[i],coulumbs[i],vectores[i]))
 }

 let cargaFinal = CalcularCargaFinal()
  console.log("cargaFinal")
  console.log(cargaFinal)

 const cargasE = {
    cargas:objeCargas,
    cargaF:cargaFinal
 }
 const resultado = document.getElementById("resultado");
 const resultadoN = document.getElementById("resultadoN");
  let datos = enviarData(cargasE,resultado,resultadoN);
  console.log("datos",datos)
}


function CalcularCargaFinal(){
    let carga = parseInt(document.getElementById("fcarga").value);
    let coulumb = document.getElementById("fcoulumb").value
    let x = parseInt(document.getElementById("fx1").value)
    let y = parseInt(document.getElementById("fx2").value)
    let z = parseInt(document.getElementById("fx3").value)

    return new Carga(carga,coulumb,[x,y,z])
}
