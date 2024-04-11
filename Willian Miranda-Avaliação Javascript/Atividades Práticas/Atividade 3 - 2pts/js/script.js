

function toCalc() {
    let firstNum = Number(document.getElementById("numero1").value)
    let secondNum = Number(document.getElementById("numero2").value)
    let calcBy1 = firstNum + secondNum
    let firstAnswer = document.getElementById("resposta1")
    
    firstAnswer.innerText = `Resposta: ${calcBy1}`
}


function changeBgColor() {
    // let secondAnswer = document.getElementById("verResposta2")
    let secondCard = document.getElementById("cardVermelho")

    secondCard.style.background = "red"

}
