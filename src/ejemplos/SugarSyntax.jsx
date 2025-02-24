// function cuadrado (num){
//     return num * num
// }
// console.log(cuadrado(5))

//sugar

// const cuadrado = (num) => {
//     return num * num
// }

const cuadrado = num => num * num

//destructuring

const usuario ={
    nombre: 'Nelson',
    edad: 37
}

// const nombre = usuario.nombre
// const edad = usuario.edad

const {nombre, edad} = usuario


                        //?= If(entonces)       //: Else
const mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad"

// spread Operator (...)

const numeros = [1,2,3]

const nuevosNumeros = [...numeros, 4]

//optional Chaining (?.)



