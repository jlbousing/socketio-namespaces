

const socket = io();

socket.on("welcome", (data) => {
    console.log(data);
    text.textContent = data;
});

const emitToServer = document.getElementById("emit-to-server");
console.log(emitToServer);

emitToServer.addEventListener("click", () => {
    socket.emit("server","Hola desde el cliente ");
});

socket.on("everyone", (data) => {
    console.log(data);
});