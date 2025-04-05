document.getElementById('surprise-button').addEventListener('click', function() {
  // Mostrar la sorpresa (imagen del chihuahua)
  document.getElementById('surprise').classList.remove('hidden');

  // Llamar a la función que genera el confeti
  generateConfetti();
});

// Función para generar confeti
function generateConfetti() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw'; // Posición aleatoria en el eje X
    confetti.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duración aleatoria
    confetti.style.animationDelay = Math.random() * 2 + 's'; // Retraso aleatorio
    document.body.appendChild(confetti);

    // Borrar el confeti después de que caiga
    setTimeout(() => {
      confetti.remove();
    }, 5000); // Se elimina después de 5 segundos
  }
}
