document.addEventListener("DOMContentLoaded", function () {
    const leaderboard = [
        { rank: 1, name: "Player1", score: 8990 },
        { rank: 2, name: "Player2", score: 7850 },
        { rank: 3, name: "Player3", score: 6969 },
        { rank: 4, name: "Player4", score: 1100 },
        { rank: 5, name: "Player5", score: 1000 },
        { rank: 6, name: "Player6", score: 950 },
        { rank: 7, name: "Player7", score: 900 },
        { rank: 8, name: "Player8", score: 850 },
        { rank: 9, name: "Player9", score: 800 },
        { rank: 10, name: "Player10", score: 750 }
    ];

    const leaderboardList = document.getElementById("leaderboard-list");

    leaderboard.forEach(player => {
        const leaderboardItem = document.createElement("div");
        leaderboardItem.classList.add("leaderboard-item");

        const rank = document.createElement("div");
        rank.classList.add("leaderboard-rank");
        rank.textContent = player.rank;

        const details = document.createElement("div");
        details.classList.add("leaderboard-details");

        const name = document.createElement("div");
        name.classList.add("leaderboard-name");
        name.textContent = player.name;

        const score = document.createElement("div");
        score.classList.add("leaderboard-score");
        score.textContent = `Score: ${player.score}`;

        details.appendChild(name);
        details.appendChild(score);

        leaderboardItem.appendChild(rank);
        leaderboardItem.appendChild(details);

        leaderboardList.appendChild(leaderboardItem);
    });
});
