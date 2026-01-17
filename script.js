(function () {
  emailjs.init("template_ithweea");
})();

emailjs.sendForm(
  "service_h8dqwck",
  "TU_TEMPLATE_ID",
  this
)
.then(() => {
    mensaje.classList.remove("oculto");
    form.reset();
  }).catch(() => {
    alert("Error al enviar");
  });
});
