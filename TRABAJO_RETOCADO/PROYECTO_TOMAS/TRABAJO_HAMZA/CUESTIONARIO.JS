window.onload = function () {
    // Añadimos la clase 'loaded' al body para activar la animación de desvanecimiento
    document.body.classList.add('loaded');
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('correccion-respuesta').addEventListener('click', function () {
        console.log('Botón corregir clickeado');

        // Respuestas correctas definidas
        const correctAnswers = {
            question1: 'c',
            question2: 'b',
            question3: 'c',
            question4: 'c',
            question5: 'b',
            question6: 'c',
            question7: 'c',
            question8: 'c',
            question9: 'b'
        };

        // Contadores de respuestas
        let correct = 0;
        let incorrect = 0;
        let unanswered = 0;

        // Recorrer todas las preguntas
        for (let i = 1; i <= 9; i++) {
            let question = 'question' + i;
            let selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);

            if (selectedAnswer) {
                // Verificar si la respuesta es correcta
                if (selectedAnswer.value === correctAnswers[question]) {
                    correct++;
                } else {
                    incorrect++;
                }
            } else {
                // Si no se seleccionó respuesta
                unanswered++;
            }
        }

        // Mostrar los resultados
        document.getElementById('correct-answers').textContent = 'Correctas: ' + correct;
        document.getElementById('incorrect-answers').textContent = 'Incorrectas: ' + incorrect;
        document.getElementById('unanswered-questions').textContent = 'Sin responder: ' + unanswered;

        // Mostrar el contenedor de resultados
        document.getElementById('results-container').style.display = 'block';
    });
});