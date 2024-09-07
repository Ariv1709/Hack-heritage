document.addEventListener('DOMContentLoaded', function () {
    const levelContainer = document.querySelector('.level-container');

    const levels = ['Executive', 'Legislative', 'Judiciary']; // Level names

    levels.forEach((levelName, index) => {
        const level = document.createElement('div');
        level.classList.add('level');
        level.textContent = levelName;

        // Add click event listeners for respective levels
        level.addEventListener('click', function() {
            switch(index) {
                case 0:
                    window.location.href = 'exe_easy.html'; // Redirect to Executive Level
                    break;
                case 1:
                    window.location.href = 'leg_easy.html'; // Redirect to Legislative Level
                    break;
                case 2:
                    window.location.href = 'judi_easy.html'; // Redirect to Judiciary Level
                    break;
            }
        });

        levelContainer.appendChild(level);
    });
});
