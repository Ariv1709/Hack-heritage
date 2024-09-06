document.addEventListener('DOMContentLoaded', function () {
    const levelContainer = document.querySelector('.level-container');
    const numLevels = 20; // Number of levels
    const numColumns = 5; // 5 buttons per row

    const positions = []; // To store the positions of levels for connection

    for (let i = 1; i <= numLevels; i++) {
        const level = document.createElement('div');
        level.classList.add('level');
        level.textContent = `Level ${i}`;

        // Calculate row and column for the zigzag pattern
        let row = Math.floor((i - 1) / numColumns);
        let col = (i - 1) % numColumns;

        if (row % 2 === 1) {
            col = numColumns - col - 1; // Reverse order for odd rows
        }

        level.style.gridRowStart = row + 1;
        level.style.gridColumnStart = col + 1;

        levelContainer.appendChild(level);

        // Store position for connection lines
        const rect = level.getBoundingClientRect();
        const containerRect = levelContainer.getBoundingClientRect();
        positions.push({
            index: i,
            x: rect.left - containerRect.left + rect.width / 2,
            y: rect.top - containerRect.top + rect.height / 2
        });
    }

    // Draw connections between levels
    function drawConnections() {
        for (let i = 1; i < positions.length; i++) {
            const from = positions[i - 1];
            const to = positions[i];

            // Create a connection line
            const connection = document.createElement('div');
            connection.classList.add('connection');

            const length = Math.sqrt((to.x - from.x) ** 2 + (to.y - from.y) ** 2);
            const angle = Math.atan2(to.y - from.y, to.x - from.x) * (180 / Math.PI);

            connection.style.width = `${length}px`;
            connection.style.transform = `rotate(${angle}deg)`;
            connection.style.top = `${from.y}px`;
            connection.style.left = `${from.x}px`;

            levelContainer.appendChild(connection);

            // Add arrow for each connection
            if (i > 0) {
                const arrow = document.createElement('div');
                arrow.classList.add('arrow');

                // Position arrow at the start of the connection
                arrow.style.top = `${from.y - 10}px`;
                arrow.style.left = `${from.x - 10}px`;

                levelContainer.appendChild(arrow);
            }
        }
    }

    // Draw connections and arrows after levels are added to the DOM
    setTimeout(drawConnections, 100); // Adjust delay as needed
});
