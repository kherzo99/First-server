const express = require ( "express")

const server = express();

/*
app de express -> 
-ruta 
-callback (
    recibe 2 parametros:
    request 
    response
)
*/

server.get("/", (request, response) => {
    response.write("Estamos en Home con get");
    response.end()
});

server.post("/", (request, response) => {
    response.write("Estamos en Home con post");
    response.end()
});

server.delete("/", (request, response) => {
    response.write("Estamos en Home con delete");
    response.end()
});

server.patch("/", (request, response) => {
    response.write("Estamos en Home con patch");
    response.end()
});

server.listen(8080, () => {
    console.log("Nuestro servidor esta prendido");
});


