document.addEventListener('DOMContentLoaded', () => {
    const nameCards = document.querySelectorAll('.name-card');

    // --- Función para cargar los puntajes guardados ---
    function loadScores() {
        nameCards.forEach(card => {
            const scoreSpan = card.querySelector('.score');
            const cardId = card.id; // Obtiene el ID de la tarjeta (ej. 'derimishk')

            // Intenta obtener el puntaje del localStorage.
            // La clave en localStorage será, por ejemplo, 'score_derimishk'.
            const savedScore = localStorage.getItem(`score_${cardId}`);
            if (savedScore !== null) {
                // Si hay un puntaje guardado, úsalo.
                scoreSpan.textContent = savedScore;
            } else {
                // Si no hay nada guardado, inicializa en 0.
                scoreSpan.textContent = 0;
            }
        });
    }

    // --- Función para guardar un puntaje en localStorage ---
    function saveScore(cardId, score) {
        // Guarda el puntaje con una clave única para cada tarjeta.
        localStorage.setItem(`score_${cardId}`, score);
    }

    // --- Llama a loadScores() al inicio para cargar los puntajes guardados ---
    loadScores();

    // --- Configuración de eventos para los botones ---
    nameCards.forEach(card => {
        const addButton = card.querySelector('.add-button');
        const subtractButton = card.querySelector('.subtract-button');
        const scoreSpan = card.querySelector('.score');
        const cardId = card.id; // Obtiene el ID de la tarjeta para usarlo al guardar

        // Evento para el botón de sumar
        addButton.addEventListener('click', () => {
            let currentScore = parseInt(scoreSpan.textContent);
            currentScore++;
            scoreSpan.textContent = currentScore;
            // Guarda el nuevo puntaje después de sumar
            saveScore(cardId, currentScore);
        });

        // Evento para el botón de restar
        subtractButton.addEventListener('click', () => {
            let currentScore = parseInt(scoreSpan.textContent);
            if (currentScore > 0) {
                currentScore--;
                scoreSpan.textContent = currentScore;
                // Guarda el nuevo puntaje después de restar
                saveScore(cardId, currentScore);
            } else {
                alert('No se puede restar más, el puntaje ya es 0.');
            }
        });
    });
});
