const socket = io.connect("http://localhost:3000");

const sender = document.querySelector("#Name");
const text = document.querySelector("#textmessage");
const submit = document.querySelector("#send");
const contents = document.querySelector("#message");

submit.addEventListener("click", () => {
  if (text.value.trim()) {
      socket.emit("chat", {
          sender: sender.innerText,
          message: text.value,
          type: 'text'
      });
      text.value = '';
  }
});
socket.on("chat", (data) => {
  if (data.type === 'text') {
      contents.innerHTML += `<div><b>${data.sender}:</b> ${data.message}</div>`;
  } else if (data.type === 'image') {
      contents.innerHTML += `<div><b>${data.sender}:</b> <img src="${data.image}" alt="${data.name}" style="width: 100px;"></div>`;
  }
});
