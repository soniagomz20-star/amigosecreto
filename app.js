// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Array para almacenar los nombres de los amigos

function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nombreAmigo = amigoInput.value.trim(); // Obtener el valor del input y limpiar espacios

    if (nombreAmigo) { // Verificar que el nombre no esté vacío
        amigos.push(nombreAmigo); // Agregar el nombre al array
        amigoInput.value = ''; // Limpiar el input

        actualizarListaAmigos(); // Actualizar la lista mostrada en el HTML
    }
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista actual antes de volver a llenarla

    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpiar resultados anteriores

    if (amigos.length === 0) {
        resultadoDiv.innerHTML = '<li>Primero añade nombres a la lista.</li>';
        return;
    }

    // Elegir un solo ganador aleatoriamente
    let randomIndex = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[randomIndex];

    // Mostrar el ganador
    let li = document.createElement('li');
    li.textContent = `¡El ganador es: ${ganador}!`;
    resultadoDiv.appendChild(li);
}