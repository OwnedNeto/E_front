/*const nombres = ['ernesto', 'alberto','carlos','marlon'];


let [nombre1, nombres2, nombre3,nombre4] = nombres 
console.log(nombre1);

const datos_p = {
    nombre : "Ernesto",
    ap_p: "Meléndez",
    ap_m: "Pozos"
}

console.log(datos_p['nombre'])
console.log(datos_p.nombre)

let {nombre, ap_p,ap_m} = datos_p;
console.log(ap_p);
 */

const datos = [
{
    nombre : "jose",
    apellido: "perez",
    fecha_naci : "10/05/2000",
    matricula : 1216151,
    carrera: "industrial" ,
    edad: 23 ,
    semestre: "cuarto",
    escuela: "uvm"
},
{
    nombre : "ana",
    apellido: "perez",
    fecha_naci : "30/02/2002",
    matricula : 1216132,
    carrera: "gestion" ,
    edad: 20 ,
    semestre: "quito",
    escuela: "poli"

},
{
    nombre : "julio",
    apellido: "lopez",
    fecha_naci : "11/08/2002",
    matricula : 1216123,
    carrera: "sistemas" ,
    edad: 22 ,
    semestre: "septimo",
    escuela: "tecnm"

},
{
    nombre : "leonardo",
    apellido: "Exquivel",
    fecha_naci : "12/03/2004",
    matricula : 1216124,
    carrera: "industrial" ,
    edad: 25 ,
    semestre: "segundo",
    escuela: "salle"

},
{
    nombre : "lisandro",
    apellido: "Ortiz",
    fecha_naci : "19/06/2001",
    matricula : 1216125,
    carrera: "gestion" ,
    edad: 19 ,
    semestre: "primero",
    escuela: "tec-monterrey"

}

];
const agregar_datos = ()=>{
    datos.push(
        {
            nombre:"jesus",
            apellido:"palacio",
            edad:33,
            escuela:"tecnologuico de tlahuac",
            semestre:"primero",
            fecha_nacimiento:"20/02/1990",
            puesto:"sistemas",
            matricula:201190030
        },
        {
            nombre:"Rumualdo",
            apellido:"hernandez",
            edad:35,
            escuela:"itma 2",
            semestre:"septimo",
            fecha_nacimiento:"20/02/1990",
            puesto:"sistemas",
            matricula:201190030
        }
    );
};



agregar_datos();
datos.map(({nombre, apellido,edad,escuela,semestre,fecha_nacimiento,puesto,matricula} = persona) => {
    console.log(`los datos son : ${nombre}, ${apellido},${edad},${escuela},${semestre}, ${fecha_naci}, ${puesto}, ${matricula}`);
 });


