document.addEventListener('DOMContentLoaded', () => {
    const caseStudiesData = [
        {
            imgSrc: 'image1.jpg', // Replace with the actual image URL
            imgLink: 'https://blog.ipleaders.in/navtej-singh-johar-v-uoi-judgment-which-decriminalized-homosexuality/',
            externalLink: 'https://blog.ipleaders.in/navtej-singh-johar-v-uoi-judgment-which-decriminalized-homosexuality/'
        },
        {
            imgSrc: 'image2.jpg', // Replace with the actual image URL
            imgLink: 'https://blog.ipleaders.in/case-law-summary-mohd-ahmed-khan-v-shah-bano-begum-others-1985-air-945/',
            externalLink: 'https://blog.ipleaders.in/case-law-summary-mohd-ahmed-khan-v-shah-bano-begum-others-1985-air-945/'
        },
        {
            imgSrc: 'image3.jpg', // Replace with the actual image URL
            imgLink: 'https://lawbhoomi.com/aruna-shanbaug-vs-union-of-india/#:~:text=The%20apex%20court%20in%20Aruna,High%20Court%20under%20Article%20226.',
            externalLink: 'https://lawbhoomi.com/aruna-shanbaug-vs-union-of-india/#:~:text=The%20apex%20court%20in%20Aruna,High%20Court%20under%20Article%20226.'
        },
        {
            imgSrc: 'image4.jpg', // Replace with the actual image URL
            imgLink: 'https://lawwire.in/justice-k-s-puttaswamy-another-vs-union-of-india-case-analysis/?noamp=available',
            externalLink: 'https://lawwire.in/justice-k-s-puttaswamy-another-vs-union-of-india-case-analysis/?noamp=available'
        },
        {
            imgSrc: 'image5.jpg', // Replace with the actual image URL
            imgLink: 'https://example.com',
            externalLink: 'https://example.com'
        }
    ];

    const caseStudiesContainer = document.getElementById('case-studies');

    caseStudiesData.forEach(study => {
        const caseStudyDiv = document.createElement('div');
        caseStudyDiv.className = 'case-study';

        const imgLink = document.createElement('a');
        imgLink.href = study.imgLink;
        imgLink.target = '_blank';

        const img = document.createElement('img');
        img.src = study.imgSrc;
        img.alt = 'Case Study Image';

        imgLink.appendChild(img);

        const externalLink = document.createElement('a');
        externalLink.href = study.externalLink;
        externalLink.className = 'external-link';
        externalLink.target = '_blank';
        externalLink.textContent = 'Visit External Website';

        caseStudyDiv.appendChild(imgLink);
        caseStudyDiv.appendChild(externalLink);

        caseStudiesContainer.appendChild(caseStudyDiv);
    });
});
