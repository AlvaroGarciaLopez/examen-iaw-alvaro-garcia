const pt =require("prompt-sync")({signit: true})

const cadena = pt ("la suma de la cadena es: ")

const frase = cadena.toLowerCase()

let digitos = 0 

   for (let x = 0; x < frase.length; x++){
    if (frase.charAt(x) === "0" || 
        frase.charAt(x) === "1" ||
        frase.charAt(x) === "2" ||
        frase.charAt(x) === "3" ||
        frase.charAt(x) === "4" ||
        frase.charAt(x) === "5" ||
        frase.charAt(x) === "6" ||
        frase.charAt(x) === "7" ||
        frase.charAt(x) === "8" ||
        frase.charAt(x) === "9" ) {
            digitos = digitos +1 
        } 
           }
    console.log("¿cuantos digitos se han introducido? " + digitos)