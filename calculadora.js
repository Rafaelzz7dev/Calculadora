let res = document.querySelector('#calculo');

function insert(num){
    res.innerHTML += num;

}

function limpar(){
     res.innerHTML = '';
}

function apagar(){
    const resultado = res.innerHTML;
    res.innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular(){
    const resultado = res.innerHTML;
    if (resultado) {
        res.innerHTML = eval(resultado)
    } else {
        alert('Nada para calcular! Digite um número.')
    }
}
