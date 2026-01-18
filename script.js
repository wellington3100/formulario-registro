(function () {
    emailjs.init("czDWUqMBEYh48EVMO"); // ← tu public key
})();

const form = document.getElementById("form");
const success = document.getElementById("success");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_h8dqwck",   // tu SERVICE ID
        "template_ithweea",  // tu TEMPLATE ID
        this
    ).then(
        function () {
            success.style.display = "block";
            form.reset();
        },
        function (error) {
            alert("Error al enviar el formulario");
            console.error(error);
        }
    );
});
