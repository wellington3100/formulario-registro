(function () {
  emailjs.init("PUBLIC_KEY_AQUI");
})();

const form = document.getElementById("registroForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "SERVICE_ID_AQUI",
    "TEMPLATE_ID_AQUI",
    this
  ).then(() => {
    mensaje.classList.remove("oculto");
    form.reset();
  }).catch(() => {
    alert("Error al enviar");
  });
});
