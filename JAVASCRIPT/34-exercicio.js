
function resultado() {
    let local = Number(document.getElementById("pontuacaoLocal").value)
    let visitante = Number(document.getElementById("pontuacaoVisitante").value)
    let resposta = document.getElementById("resposta")

    console.log(local)
    console.log(visitante)

    // Se os times empatarem 
    if (local === "" || visitante === "") {
        resposta.innerText = "Digite todos os valores"
    }
    // Se o time local vencer
    else if (local > visitante) {
        resposta.innerText = "Vitória do time local!"
    }
    // Se o time local vencer
    else if (visitante > local) {
        resposta.innerText = "Vitória do time visitante!"
    }
    // Se o time visitante vencer
    else if (local === visitante) {            // Se não digitar nenhum valor
        resposta.innerText = "Houve um empate!"
    }
}
