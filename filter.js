var estudiantes = [
    { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
    { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
    { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
    { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
]


let  names = estudiantes.map(item => item.nombre)
let  apellidos = estudiantes.map(item => item.apellido)
let namesandapellidos = names.concat(apellidos)
console.log(namesandapellidos)


function obtenerSoloLosMejores(estudiantes, nota1, nota2) {
const newarray = estudiantes.filter(item => item.check1 >= nota1 && item.check2 >= nota2 )
  newarray
  newarray
  console.log(Object.values(newarray))
  return newarray
};

console.log(obtenerSoloLosMejores(estudiantes, 15, 15)) 
 


//  retorna => ["Fulanito Rodriguez", "Perengano Leiria"];