document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "Gracias por ser mi sol en los días grises. ☀️",
        "Tu alegría ilumina mi mundo, igual que las flores amarillas. ✨",
        "Siempre serás mi flor favorita. 💛",
        "Cada día a tu lado es como un hermoso campo de flores. 😊",
        "Solo te diré una cosa: gracias por existir. 🥰",
        "Eres el amarillo de mi vida. 🌼"
    ];

    const messageButton = document.getElementById('messageButton');
    const messageContainer = document.getElementById('messageContainer');

    messageButton.addEventListener('click', () => {
        // Selecciona un mensaje aleatorio
        const randomIndex = Math.floor(Math.random() * messages.length);
        messageContainer.textContent = messages[randomIndex];
    });

    // --- Generador de flores ---
    const flowerContainer = document.getElementById('flowerContainer');
    const numberOfFlowers = 50; // ¡Puedes cambiar este número a tu gusto!

    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('div');
        flower.textContent = '🌼'; // Puedes cambiar este emoji si quieres
        flower.classList.add('flower');

        // Posición aleatoria
        const leftPosition = Math.random() * 100;
        const animationDuration = Math.random() * 10 + 10; // Duración de 10 a 20 segundos
        const animationDelay = Math.random() * 5; // Retraso de 0 a 5 segundos

        flower.style.left = `${leftPosition}vw`;
        flower.style.animationDuration = `${animationDuration}s`;
        flower.style.animationDelay = `${animationDelay}s`;
        
        flowerContainer.appendChild(flower);
    }
});