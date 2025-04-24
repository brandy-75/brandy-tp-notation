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
    let selectedRating = null;

document.querySelectorAll('.star').forEach((button) => {
  button.addEventListener('click', () => {
    selectedRating = button.getAttribute('data-value');

    document.querySelectorAll('.star').forEach((btn) => {
      btn.classList.remove('selected');
    });

    button.classList.add('selected');
  });
});

document.getElementById('submit').addEventListener('click', () => {
  if (!selectedRating) {
    document.getElementById('message').textContent = "Veuillez sélectionner une note.";
    document.getElementById('message').style.color = "red";
    return;
  }

  const main = document.querySelector('main');
  main.innerHTML = `
    <div class="card-rating">
      <div style="text-align: center;">
        <img src="https://cdn-icons-png.flaticon.com/512/942/942748.png" alt="Merci" style="width: 60px; margin-bottom: 15px;" />
        <p style="background-color: #2c2c3c; display: inline-block; padding: 6px 12px; border-radius: 20px; margin-bottom: 15px;">
          Vous avez sélectionné ${selectedRating} sur 5
        </p>
        <h2 style="margin-bottom: 10px;">Merci !</h2>
        <p style="color: #cfcfcf; font-size: 14px;">
          Nous vous remercions d’avoir pris le temps d’évaluer notre service. Si vous avez besoin de plus de soutien, n'hésitez pas à nous contacter.
        </p>
      </div>
    </div>

    <footer class="footer">
      Codé par <a href="#">Brandy</a>
    </footer>
  `;
});
