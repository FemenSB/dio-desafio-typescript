"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
if (campoSaldo) {
    campoSaldo.innerHTML = "0";
}
let saldoTotal = 0;
function somarAoSaldo(soma) {
    saldoTotal += soma;
    if (campoSaldo) {
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
function limparSaldo() {
    saldoTotal = 0;
    if (campoSaldo) {
        campoSaldo.innerHTML = '';
    }
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
