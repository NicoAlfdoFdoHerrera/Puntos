document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todas las tarjetas de nombres
    const nameCards = document.querySelectorAll('.name-card');

    // Itera sobre cada tarjeta de nombre
    nameCards.forEach(card => {
        const addButton = card.querySelector('.add-button');         // Botón de "Sumar 1"
        const subtractButton = card.querySelector('.subtract-button'); // Nuevo botón de "Restar 1"
        const scoreSpan = card.querySelector('.score');              // El 'span' donde se muestra el puntaje

        // Evento para el botón de sumar
        addButton.addEventListener('click', () => {
            let currentScore = parseInt(scoreSpan.textContent);
            currentScore++;
            scoreSpan.textContent = currentScore;
        });

        // Evento para el nuevo botón de restar
        subtractButton.addEventListener('click', () => {
            let currentScore = parseInt(scoreSpan.textContent);
            if (currentScore > 0) { // Asegura que el puntaje no sea negativo
                currentScore--;
                scoreSpan.textContent = currentScore;
            } else {
                alert('No se puede restar más, el puntaje ya es 0.');
            }
        });
    });

    // Las funciones y variables relacionadas con 'lastAddedNameId' y 'subtract-last-button' se eliminan,
    // ya que cada tarjeta maneja su propia suma y resta.
});