const saludo=(nombre = "desconocido", edad = "desconocida")=>{
    let mayor_menos = edad >= 18 ? 'mayor' : 'menor';
    return (edad >= 18)? `hola ${nombre} tu edad es ${edad}`
};

console.log(saludo('ernesto', 21));