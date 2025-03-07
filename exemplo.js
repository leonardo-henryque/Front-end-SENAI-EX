// alert("Ola mundo")
//
// var test = prompt("Digite algo")
//
// alert(test)

function testText() {
    document.getElementById("titulo").innerHTML += "boa tarde"

}

function testColor() {
   const titulo = document.getElementById("titulo")

    titulo.style.color = "red"
    ////titulo.style.fontSize = "20px"
}

function reset() {
    document.getElementById("titulo").innerHTML = "L.12.12 Polo Merci, a solidariedade no coração"

}

function testInput () {}
    document.getElementById("input").value = "tarde"

function limpaInput() {
    var limpar = confirm("Deseja limpar o formulario?")
    if (limpar) {
        document.getElementById("inputEmail4").value = ""
        document.getElementById("inputPassword4").value = ""
        document.getElementById("inputNome").value = ""
        document.getElementById("inputAddress2").value = ""
        document.getElementById("City").value = ""
        document.getElementById("inputState").value = ""
    }
}

function trocaCor() {
    document.getElementById("inputEmail4").style.color = "red"
}

function trocaCor2() {
    document.getElementById("inputPassword4").style.color = "red"
}

function trocaCor3() {
    document.getElementById("inputNome").style.color = "red"
}

function trocaCor4() {
    document.getElementById("inputAddress2").style.color = "red"
}

function trocaCor5() {
    document.getElementById("city").style.color = "red"
}

function trocaCor6() {
    document.getElementById("inputState").style.color = "red"
}



