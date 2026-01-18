(function () {
    emailjs.init("czDWUqMBEYh48EVMO"); // ← tu public key
})();

const form = document.getElementById("form");
const success = document.getElementById("success");

form.addEventListener("submit", function (e) {
    e.preventDefault();

       "service_h8dqwck",
    "template_ithweea",
    this
).then(
    function (response) {
        console.log("SUCCESS", response);
    },
    function (error) {
        console.log("ERROR", error);
    }
);

});
