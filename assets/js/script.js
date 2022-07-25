
// case sensitive =reconhece letras maisculas e minusculas
// por tag: get ElementByTagName()
// por Id: get ElementById()
// por Nome : getElementByName()
// por Seletor querySelector ()

let nome = window.document.getElementById('nome')
let email = window.document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = "50%"
email.style.width = "50%"
assunto.style.width= "50%"

function validaNome(){
    let text= document.getElementById("txtNome")
    if (nome.value.length < 3){
        text.innerHTML = "Nome Inválido"
        text.style.color = "red"
        return false
    } else {
        text.innerHTML = "Nome Válido "
        text.style.color = "green"
        return true
    }
}

function validaEmail(){
    let text= document.getElementById("txtEmail")
    if (email.value.length < 3){
        text.innerHTML = "Email Inválido"
        text.style.color = "red"
        return false
    } else {
        text.innerHTML = "Email Válido "
        text.style.color = "green"
        return true
    }
}

function enviar() {
    let nomeIsValid = validaNome()
    let emailIsValid = validaEmail()
    if (nomeIsValid && emailIsValid) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente antes de enviar!')
    }
    function mapaZoom() {
        mapa.style.width = '800px'
        mapa.style.height = '500px'
    }
    
    function mapaNormal() {
        mapa.style.width = '400px'
        mapa.style.height = '250px'


    }
}