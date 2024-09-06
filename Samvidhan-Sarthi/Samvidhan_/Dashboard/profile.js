document.addEventListener("DOMContentLoaded", function () {
    // Dummy data, you can dynamically fetch and update these values as needed
    const streakCount = 10; // Example streak count in days
    const totalXP = 15000; // Example total XP earned
    const rank = 1; // Example rank in the leaderboard

    // Update the profile page with these values
    document.getElementById("streak-count").textContent = `${streakCount} days`;
    document.getElementById("xp-earned").textContent = `${totalXP} XP`;
    document.getElementById("leaderboard-rank").textContent = rank;
});
