"use strict";
var Profissoes;
(function (Profissoes) {
    Profissoes[Profissoes["Atriz"] = 0] = "Atriz";
    Profissoes[Profissoes["Padeiro"] = 1] = "Padeiro";
})(Profissoes || (Profissoes = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Profissoes.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissoes.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissoes.Padeiro
};
