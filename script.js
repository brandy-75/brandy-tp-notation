document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const submitButton = document.getElementById("submit");
    const message = document.getElementById("message");
    let selectedRating = 0;
    
    stars.forEach(star => {
        star.addEventListener("click", function () {
        selectedRating = parseInt(this.dataset.value);
        updateSelection(selectedRating);
        });
    });
    
    function updateSelection(value) {
        stars.forEach(star => {
        if (parseInt(star.dataset.value) <= value) {
            star.classList.add("selected");
        } else {
            star.classList.remove("selected");
        }
        });
    }
    
    submitButton.addEventListener("click", function () {
        if (selectedRating > 0) {
        message.innerText = `Merci pour votre note de ${selectedRating} ★ !`;
        message.style.color = "lightgreen";
        } else {
        message.innerText = "Veuillez sélectionner une note.";
        message.style.color = "red";
        }
    });
    });
    