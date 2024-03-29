

const socket = io();

socket.on("welcome", (data) => {
    console.log(data);
    text.textContent = data;
});

const emitToServer = document.getElementById("emit-to-server");
emitToServer.addEventListener("click", () => {
    socket.emit("server","Hola desde el cliente ");
});

socket.on("everyone", (data) => {
    console.log(data);
});

const emitToLast = document.getElementById("emit-to-last");
emitToLast.addEventListener("click", () => {
    socket.emit("last","Hola, tu eres el ultimo");
});

socket.on("salute", (message) => {
    console.log(message);
  });