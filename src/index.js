const express = require("express");
const { createServer } = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname,"views")))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

io.on("connection", (socket) => {

   socket.on("disconnect", () => {
        console.log(`el socket ${socket.id} se ha desconectado`);
   });

   socket.conn.once("upgrade", () => {
        console.log("hemos pasado de http Long-Polling a ",socket.conn.transport.name)
   });

   //EMISION BASICA
   socket.emit("welcome","welcome Estas conectado");

   socket.on("server", (data) => {
          console.log(data);
   });

   //EMISION A TODOS LOS CLIENTES
   io.emit("everyone",`${socket.id} se ha conectado`);
});



httpServer.listen(3000);