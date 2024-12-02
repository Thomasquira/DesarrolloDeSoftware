window.onload = function () {
    // Añadimos la clase 'loaded' al body para activar la animación de desvanecimiento
    document.body.classList.add('loaded');
};

document.addEventListener('DOMContentLoaded', function () {
    const clearButtons = document.querySelectorAll('.clear-selection');

    clearButtons.forEach(button => {
        button.addEventListener('click', function () {
            const questionName = this.getAttribute('data-question');
            const selectedRadio = document.querySelector(`input[name="${questionName}"]:checked`);

            if (selectedRadio) {
                selectedRadio.checked = false; // Desmarcar la opción seleccionada
            }
        });
    });
    document.getElementById('correccion-respuesta').addEventListener('click', function () {

        console.log('Botón corregir clickeado');

        // Respuestas correctas definidas
        const correctAnswers = {
            question1: 'a',
            question2: 'b',
            question3: 'a',
            question4: 'c',
            question5: 'b',
            question6: 'b',
            question7: 'c',
            question8: 'b'
          
        };

        // Contadores de respuestas
        let correct = 0;
        let incorrect = 0;
        let unanswered = 0;

        // Recorrer todas las preguntas
        for (let i = 1; i <= 9; i++) {
            let question = 'question' + i;
            let selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
            let questionDiv = document.querySelector(`div:nth-of-type(${i})`);

            if (selectedAnswer) {
                // Verificar si la respuesta es correcta
                if (selectedAnswer.value === correctAnswers[question]) {
                    correct++;
                    selectedAnswer.parentNode.classList.add('correct-answer');
                } else {
                    incorrect++;
                    selectedAnswer.parentNode.classList.add('incorrect-answer');
                }
            } else {
                // Si no se seleccionó respuesta
                unanswered++;
            }
        }
        /* Si tienes mas de cinco fallos, te sale una imagen, (de coña) */
        if (incorrect > 5) {
            const imageContainer = document.getElementById('image-container');
            imageContainer.style.display = 'block'; // Mostrar el contenedor de la imagen
        }


        // Mostrar los resultados
        document.getElementById('correct-answers').textContent = 'Correctas: ' + correct;
        document.getElementById('incorrect-answers').textContent = 'Incorrectas: ' + incorrect;
        document.getElementById('unanswered-questions').textContent = 'Sin responder: ' + unanswered;

        // Mostrar el contenedor de resultados
        document.getElementById('results-container').style.display = 'block';

        // Deshabilitar todas las respuestas para que no se pueda interactuar más
        const allInputs = document.querySelectorAll('input[type="radio"], #correccion-respuesta');
        allInputs.forEach(input => input.disabled = true);
    });

});