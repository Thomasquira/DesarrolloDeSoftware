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
            question8: 'b',
            question9: 'b',
            question10: 'b',
            question11: 'b',
            question12: 'a',
            question13: 'b',
            question14: 'a',
            question15: 'b',
            question16: 'c',
            question17: 'b',
            question18: 'b',
            question19: 'c',
            question20: 'b',
            question21: 'b',
            question22: 'b',
            question23: 'b',
            question24: 'c',
            question25: 'b',
            question26: 'b',
            question27: 'a',
            question28: 'b',
            question29: 'b',
            question30: 'b',
            question31: 'c',
            question32: 'b',
            question33: 'a',
            question34: 'b',
            question35: 'b',
            question36: 'b',
            question37: 'c',
            question38: 'b',
            question39: 'b',
            question40: 'c',
            question41: 'b',
            question42: 'b',
            question43: 'b',
            question44: 'c',
            question45: 'b',
            question46: 'b',
            question47: 'b',
            question48: 'c',
            question49: 'b',
            question50: 'b',
            question51: 'b',
            question52: 'b',
            question53: 'b',
            question54: 'b',
            question55: 'b',
            question56: 'b',
            question57: 'b',
            question58: 'b',
            question59: 'b',
            question60: 'b'

        };

        // Contadores de respuestas
        let correct = 0;
        let incorrect = 0;
        let unanswered = 0;

        // Recorrer todas las preguntas
        for (let i = 1; i <= 60; i++) {
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