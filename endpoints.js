const http = require ("http");

/*
- ENDPOINT -> 
Se conforma por 2 cosas:
method: GET, PATCH, etc... 
ruta: /kodemia / post
*/

const server = http.createServer ((request, response) => {
    // Leer la request 
    const { url , method } = request;
    // 1er endpoint
    if (method === "GET" && url === "/hola") {
        response.write("Estamos en el endpoint de GET en /hola ")
    };
    // 2do endpoint 
    if (method === "GET" && url === "/adios") {
        response.write ("Estamos en el ENDPOINT de GET en /adios")
    };
    //3er endpoint
    if (method === "POST" && url === "/hola") {
        response.write("Estamos creando algo en /hola")
    };
    // 4to endpoint 
    if (method === "POST" && url === "/adios") {
        response.write("Estamos creando algo en /adios")
    };
    // 5to endpoint 
    if (method === "PUT" && url === "/hola") {
        response.write ("Estamos haciendo PUT en /hola")
    };
    //6to endpoint 
    if (method === "PUT" && url === "/adios") {
        response.write ("Estamos haciendo PUT en /adios")
    };
    //7mo endpoint 
    if (method === "PATCH" && url === "/hola") {
        response.write ("Esto es un PATCH en /hola")
    };
    //8vo endpoint 
    if ( method === "PATCH" && url === "/adios") {
        response.write ("Esto es un PATCH en /adios")
    };
    //9no endpoint 
    if ( method === "DELETE" && url === "/hola") {
        response.write ("Esto es un delete en /hola")
    };
    //10mo endpoint 
    if (method === "DELETE" && url === "/adios") {
        response.write ("Esto es un DELETE en /adios")
    };

    // Responder 

    response.end()
});

// Prender nuestro servidor 

server.listen(8080, () => {
    console.log("Nuestro servidor esta prendido");
});

 


