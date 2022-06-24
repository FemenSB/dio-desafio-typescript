let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma')as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

if(campoSaldo) {
    campoSaldo.innerHTML = "0";
}

let saldoTotal = 0;

function somarAoSaldo(soma: number): void {
    saldoTotal += soma;
    if(campoSaldo) {
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

function limparSaldo(): void {
    saldoTotal = 0;
    if(campoSaldo) {
        campoSaldo.innerHTML = '';
    }
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});