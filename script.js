(function () {
  emailjs.init("template_ithweea");
})();

const form = document.getElementById("registroForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_h8dqwck",
    "template_ithweea",
    this
  ).then(() => {
    mensaje.style.display = "block";
    form.reset();
  }).catch((error) => {
    console.error("ERROR:", error);
    alert("Error al enviar el registro");
  });
});
