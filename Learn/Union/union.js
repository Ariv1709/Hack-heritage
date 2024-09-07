document.querySelectorAll('.dropdown-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            document.querySelectorAll('.dropdown-content').forEach(item => {
                item.style.display = 'none';
            });
            content.style.display = 'block';
            content.classList.add('show');
        }
    });

    document.querySelectorAll('.article-title').forEach(article => {
        article.addEventListener('click', () => {
            const articleContent = article.nextElementSibling;
            articleContent.style.display = articleContent.style.display === 'block' ? 'none' : 'block';
        });
    });
});
