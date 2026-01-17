const form = document.getElementById("registroForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function () {
  setTimeout(() => {
    mensaje.classList.remove("oculto");
    form.reset();
  }, 500);
});
