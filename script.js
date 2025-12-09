document.addEventListener("DOMContentLoaded", function() {
    const reservationForm = document.getElementById("reservation-form");
    const messageBox = document.getElementById("reservation-message");

    if (reservationForm && messageBox) {
        reservationForm.addEventListener("submit", function (event) {
            event.preventDefault();


            const name = document.getElementById("name").value.trim();
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            const size = document.getElementById("size").value;

            if (!name || !date || !time || !size) {
                messageBox.textContent = "Please fill out all fields before submitting.";
                messageBox.className = "message error";
                return;
            }

            messageBox.className = "message success";
            messageBox.textContent = 
            `Thank you, ${name}! Your reservation for ${size} guest(s) on ${date} at ${time} has been received.`;

            const main = document.querySelector("main");
            if (main) {
                main.style.border = "2px solid #0b6623";
            }

            reservationForm.reset();
        });
    }
});
