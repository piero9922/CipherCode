let text = prompt("Escriba el mensaje (texto) a codificar (TODO EN MAYUSCULAS)")
let indexNumber = Number(prompt('Ingrese el codigo de desplazamiento (NUMERO)'))

function encode(indexNumber,text){

    let contenido = ""

    for(let i = 0; i < text.length; i++ ){
        const letra = text[i]
        const characterCode = letra.charCodeAt(0)
        const formula = (characterCode - 65 + indexNumber) % 26 + 65
        let nuevaLetra = String.fromCharCode(formula)

        if(characterCode == 32){
            nuevaLetra = " "
        }

        contenido = contenido + nuevaLetra
        
    }
    alert(`Tu codigo es ${contenido}`)
    return contenido
}

encode(indexNumber,text)


