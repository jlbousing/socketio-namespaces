const user = prompt("Escribe tu usuario");

const profes = ["RetaxMaster","juandc","GNDX"];

let socketNamespace, group;

const chat = document.querySelector("#chat");
const namespace = document.querySelector("#namespace");

if(profes.includes(user)) {

    socketNamespace = io("/teachers");
    group = "teachers";
}else {

    socketNamespace = io("/students");
    group = "students";
}

socketNamespace.on("connect", () => {

    namespace.textContent = group;
});

//PROGRAMANDO LA LOGICA DE ENVIOS DE MENSAJES

const sendMessage = document.querySelector("#sendMessage");
sendMessage.addEventListener("click", () => {

    const message = prompt("Escribe tu mensaje");

    socketNamespace.emit("send message", {
        message,
        user
    });
});

socketNamespace.on("message", (messageData) => {
    const { user, message } = messageData;

    const li = document.createElement("li");
    li.textContent = `${user}: ${message}`;
    chat.appendChild(li);
});