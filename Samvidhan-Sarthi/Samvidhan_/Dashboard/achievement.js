document.addEventListener("DOMContentLoaded", function () {
    const achievements = [
        {
            category: "Beginner",
            items: [
                {
                    title: "First Steps",
                    description: "Complete the tutorial.",
                    unlocked: true
                },
                {
                    title: "Newbie Explorer",
                    description: "Explore 10% of the map.",
                    unlocked: true
                },
                {
                    title: "Collector",
                    description: "Collect 50 items.",
                    unlocked: false,
                    progress: 30,
                    total: 50 // out of 50
                }
            ]
        },
        {
            category: "Intermediate",
            items: [
                {
                    title: "Explorer",
                    description: "Explore 50% of the map.",
                    unlocked: false,
                    progress: 25,
                    total: 50 // out of 50
                },
                {
                    title: "Skilled Collector",
                    description: "Collect 100 items.",
                    unlocked: false,
                    progress: 80,
                    total: 100 // out of 100
                },
                {
                    title: "Adventurer",
                    description: "Complete 10 quests.",
                    unlocked: true
                }
            ]
        },
        {
            category: "Advanced",
            items: [
                {
                    title: "Master",
                    description: "Achieve level 50.",
                    unlocked: false,
                    progress: 45,
                    total: 50 // out of 50
                },
                {
                    title: "Legendary Explorer",
                    description: "Explore the entire map.",
                    unlocked: false,
                    progress: 90,
                    total: 100 // out of 100
                },
                {
                    title: "Ultimate Collector",
                    description: "Collect 500 items.",
                    unlocked: false,
                    progress: 250,
                    total: 500 // out of 500
                }
            ]
        }
    ];

    const categoryList = document.getElementById("category-list");

    achievements.forEach(category => {
        const categoryDiv = document.createElement("div");

        const categoryTitle = document.createElement("div");
        categoryTitle.classList.add("category-title");
        categoryTitle.textContent = category.category;
        categoryDiv.appendChild(categoryTitle);

        const achievementList = document.createElement("div");
        achievementList.classList.add("achievement-list");

        category.items.forEach(achievement => {
            const achievementItem = document.createElement("div");
            achievementItem.classList.add("achievement-item");
            if (!achievement.unlocked) {
                achievementItem.classList.add("locked");
            }

            const icon = document.createElement("div");
            icon.classList.add("achievement-icon");
            icon.textContent = achievement.unlocked ? "🏆" : "🔒";

            const details = document.createElement("div");
            details.classList.add("achievement-details");

            const title = document.createElement("div");
            title.classList.add("achievement-title");
            title.textContent = achievement.title;

            const description = document.createElement("div");
            description.classList.add("achievement-description");
            description.textContent = achievement.description;

            details.appendChild(title);
            details.appendChild(description);

            if (!achievement.unlocked && achievement.progress !== undefined) {
                const progressBar = document.createElement("div");
                progressBar.classList.add("progress-bar");

                const progressFill = document.createElement("div");
                progressFill.classList.add("progress-bar-fill");

                // Calculate progress percentage based on total progress value
                const progressPercentage = (achievement.progress / achievement.total) * 100;
                progressFill.style.width = `${progressPercentage}%`;

                progressBar.appendChild(progressFill);
                details.appendChild(progressBar);
            }

            achievementItem.appendChild(icon);
            achievementItem.appendChild(details);

            achievementList.appendChild(achievementItem);
        });

        categoryDiv.appendChild(achievementList);
        categoryList.appendChild(categoryDiv);
    });
});
