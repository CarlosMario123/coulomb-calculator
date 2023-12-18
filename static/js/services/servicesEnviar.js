export function enviarData(datos,resultado,resultadoN){
    fetch('/recibir', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Datos procesados:', data);
           Renderizar(resultado,resultadoN,data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function Renderizar(resultado,resultadoN,data){
    resultado.innerHTML = `<div>
    <h2 class="w-full text-center font-bold">Resultado</h2>
    <p>componente x: ${data.solucion[0]}</p>
    <p>componente y: ${data.solucion[1]} </p>
    <p>componente z:  ${data.solucion[2]}</p>
    </div>`

    resultadoN.innerHTML = `<div class = "flex w-full flex-col mt-4">
    <h2 class="w-full text-center font-bold">Resultado con notacion</h2>
    <p>componente x: ${data.solucionParse[0]}</p>
    <p>componente y: ${data.solucionParse[1]} </p>
    <p>componente z:  ${data.solucionParse[2]}</p>
    </div>`
}