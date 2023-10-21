console.log("Entro index.js");

fetch('https://dev4humans.com.mx/api/clases/productos',{method: "GET"})
    .then(response => response.json())
    .then(data =>{
        console.log("La promesa se resolvio");
        console.log(data);
    } ).catch(error =>console.log(error))