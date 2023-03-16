/*
let persona={
    nombre: "lucas",
    apellido: "martinez",
    edad: "47",    
    sexo: 'M', 
    dni: 232323654, 
    hijos:["ana martinez","marcos martinez"]

}

let persona2=persona;

console.log(persona.apellido);
console.log(persona.nombre);
console.log(persona.dni);

console.log(persona2.nombre);
console.log(persona2.apellido);
console.log(persona2.dni);
*/
let data=`{
    "empresa":"curso",
    "empleados":[
    {
       "nombre":"juan",
       "apellido":"perez",
       "dni":"23212524"    
    
    },
    {
       "nombre":"pedro",
       "apellido":"martinez",
       "dni":"25262524"    
    
    },
    {
       "nombre":"pepe",
       "apellido":"polino",
       "dni":"232997876"    
    
    },
    {
        "nombre":"maria",
        "apellido":"lalala",
        "dni":"23556574"    
     
    },
    {
        "nombre":"jose",
        "apellido":"poelo",
        "dni":"2321122324"    
     
    }
    ]
}`;
/*
let personasEmpleadas=JSON.parse(data);
console.log(personasEmpleadas);
console.log(personasEmpleadas.empleados[0].apellido);
console.log(personasEmpleadas.empleados[1].nombre);
console.log(personasEmpleadas.empleados[2].dni);
console.log(personasEmpleadas.empleados[4]);



let persona={
    nombre: "emanuel",
    apellido: "lucietti",
    edad: "47",    
    sexo: 'M', 
    dni: 232323654, 
    hijos:["ana martinez","marcos martinez"]

}



let dataJson=JSON.stringify(persona);
console.log(dataJson);




let ul=document.getElementById("miLista");
let elem1=document.createElement("li");
let elem2=document.createElement("li");
let elem3=document.createElement("li");
elem1.innerHTML=`${persona.nombre} ${persona.apellido}`;
elem2.innerHTML="elemento 2 js";
elem3.innerHTML="elemento 3 js";

ul.appendChild(elem1);
ul.appendChild(elem2);
ul.appendChild(elem3);
*/

let personasEmpleadas=JSON.parse(data);
let ul =document.getElementById("miLista");

personasEmpleadas.empleados.forEach(empleados => {
    let li=document.createElement("li");
    li.innerHTML=`nombre: ${empleados.nombre} apellido: ${empleados.apellido} dni :${empleados.dni}`
    ul.appendChild(li);
});
/*
for(empleados in personasEmpleadas.empleados){
    let li=document.createElement("li");
    li.innerHTML=`${empleados.nombre} ${empleados.apellido} ${empleados.dni}`
    ul.appendChild(li);
}*/