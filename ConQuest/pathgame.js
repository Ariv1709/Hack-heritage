document.addEventListener('DOMContentLoaded', function () {
    const levelContainer = document.querySelector('.level-container');

    const levels = ['Easy', 'Medium', 'Hard']; // Level names

    levels.forEach((levelName, index) => {
        const level = document.createElement('div');
        level.classList.add('level');
        level.textContent = levelName;

        // Add click event listeners for respective levels
        level.addEventListener('click', function() {
            if (index === 0) {
                window.location.href = 'easy.html'; // Redirect to Easy Level
            } else if (index === 1) {
                window.location.href = 'intermediate.html'; // Redirect to Medium Level
            } else if (index === 2) {
                window.location.href = 'hard.html'; // Redirect to Hard Level
            }
        });

        levelContainer.appendChild(level);
    });
});
