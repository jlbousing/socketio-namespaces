

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

//const circle = document.getElementById("circle");
const circle = document.querySelector("#circle");

const drawCircle = (position) => {
    circle.style.top = position.top;
    circle.style.left = position.left;
}

const drag = (e) => {
     //const clientX = e.clientX;
     //const clientY = e.clientY;

     const position = {
        top: `${e.clientY}px`,
        left: `${e.clientX}px`
     }

     drawCircle(position);
     socket.emit("circle position", position);
};
document.addEventListener("mousedown", e => {
    document.addEventListener("mousemove", drag);
});

document.addEventListener("mouseup", e => {
    document.removeEventListener("mousemove",drag);
});

socket.on("move circle", (position) => {
    drawCircle(position);
});