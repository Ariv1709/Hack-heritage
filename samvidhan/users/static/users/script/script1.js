document.addEventListener('DOMContentLoaded', () => {
    const sentences = [
        "The Indian Constitution: The people's shield, the nation's strength!",
        "Justice, Liberty, Equality, Fraternity – the pillars of our Constitution!",
        "Our Constitution, our compass – guiding India's democracy!",
        "In diversity we stand, united by the Constitution's hand!",
        "Empowering every citizen, the Constitution's promise of rights and freedom!"
    ];

    let index = 0;
    const slideshowText = document.getElementById('slideshow-text');

    function updateSlideshow() {
        // Update text and fade in/out effect
        slideshowText.style.opacity = 0;
        setTimeout(() => {
            slideshowText.innerText = sentences[index];
            slideshowText.style.opacity = 1;
            index = (index + 1) % sentences.length;
        }, 1000);  // Wait for 1 second before changing text for fade-out effect
    }

    // Initial text setup
    slideshowText.innerText = sentences[0];

    // Change sentences every 6 seconds
    setInterval(updateSlideshow, 6000);
});
