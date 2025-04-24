document.addEventListener("DOMContentLoaded", function() {
    let selectRating = 0;
    const stars = document.querySelectorAll(".star");
    const submitButton = document.getElementById("submit");
    const message = document.getElementById("message");

    // Gestion des étoiles au survol et au clic
    stars.forEach(star => {
        star.addEventListener("mouseover", function() {
            resetStars();
            highlightStars(Number(star.dataset.value)); // Convertir en nombre
        });

        star.addEventListener("click", function() {
            selectRating = Number(star.dataset.value); // Convertir en nombre
            resetStars();
            highlightStars(selectRating);
        });
    });

    // Soumission de la note
    submitButton.addEventListener("click", function() {
        if (selectRating > 0) {
            message.innerText = `Merci pour votre note de ${selectRating} ★`;
            message.style.color = "green";
        } else {
            message.innerText = "Veuillez sélectionner une note avant de valider.";
            message.style.color = "red";
        }
    });

    // Réinitialisation des étoiles
    function resetStars() {
        stars.forEach(star => star.classList.remove("selected"));
    }

    // Surligner les étoiles jusqu'à la sélection
    function highlightStars(limit) {
        stars.forEach(star => {
            if (Number(star.dataset.value) <= limit) {
                star.classList.add("selected");
            }
        });
    }
});
