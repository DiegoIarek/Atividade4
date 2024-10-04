let numeros = [];

document.getElementById('adicionar').addEventListener('click', function(event) {
    event.preventDefault();
    const numero = document.getElementById('numero').value;
    numeros.push(numero);
    document.getElementById('numero').value = '';
});

document.getElementById('sortear').addEventListener('click', function() {
    const sorteado = numeros[Math.floor(Math.random() * numeros.length)];
    document.getElementById('resultado').innerHTML = `O número sorteado foi: ${sorteado}`;
});