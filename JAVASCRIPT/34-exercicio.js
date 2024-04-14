
function resultado() {
    let local = document.getElementById("pontuacaoLocal").value.trim()
    let visitante = document.getElementById("pontuacaoVisitante").value.trim()
    let resposta = document.getElementById("resposta")
    let localNum = local === ""? NaN : Number(local)
    let visitanteNum = visitante === ""? NaN :  Number(visitante)
    let vitoriaLocal = localNum > visitanteNum
    let vitoriaVisitante = visitanteNum > localNum
    let empate = localNum == visitanteNum
    let invalido = isNaN(localNum) || isNaN(visitanteNum)

    if (invalido) {
        resposta.textContent = "Digite todos os valores"
    } else if (empate) {
        resposta.textContent = "Houve um empate!"
    } else if (vitoriaLocal) {
        resposta.textContent = "Vitória do time local!"
    } else if (vitoriaVisitante) {
        resposta.textContent = "Vitória do time visitante!"
    }
}




// // Se os times empatarem
// if (local === "" || visitante === "") {
//     resposta.innerText = "Digite todos os valores"
// }
// // Se o time local vencer
// else if (local > visitante) {
//     resposta.innerText = "Vitória do time local!"
// }
// // Se o time local vencer
// else if (visitante > local) {
//     resposta.innerText = "Vitória do time visitante!"
// }
// // Se o time visitante vencer
// else if (local === visitante) {            // Se não digitar nenhum valor
//     resposta.innerText = "Houve um empate!"
// }
