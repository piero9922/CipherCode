let text = prompt("Escriba el mensaje (texto) a codificar (TODO EN MAYUSCULAS)")
let indexNumber = Number(prompt('Ingrese el codigo de desplazamiento (NUMERO)'))

function encode(indexNumber,text){

    let contenido = ""

    for(let i = 0; i < text.length; i++ ){
        const letra = text[i]
        const characterCode = letra.charCodeAt(0)
        const formula = (characterCode - 65 + indexNumber) % 26 + 65
        // console.log(characterCode - 65 + indexNumber)
        // console.log(formula)
        const nuevaLetra = String.fromCharCode(formula)

        contenido = contenido + nuevaLetra
        // console.log(contenido)
        // console.log( characterCode,characterCode + indexNumber)
        // console.log(String.fromCharCode(characterCode))
    }
    alert(`Tu codigo es ${contenido}`)
    return contenido
}

encode(indexNumber,text)


