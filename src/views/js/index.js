const socket = io();

function checkSocketStatus() {
    console.log("estado de socket: ",socket.connected)
}


socket.on('connect', () => {
    console.log("el socket se ha conectado ",socket.id);
    checkSocketStatus();
});

socket.on("connect_error", () => {
    console.log("no pude conectarme")
});

socket.on("disconnect", () => {
    console.log("el socket se ha desconectado ",socket.id);
    checkSocketStatus();
});

socket.io.on("reconnect_attempt", () => {
    console.log("estoy intentando reconectar ");
});

socket.io.on("reconnect", () => {
    console.log("reconectado!!");
    checkSocketStatus();
});