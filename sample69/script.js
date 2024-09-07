const levelsData = [
    // Level 1 cards
    [
        { value: 1, content: 'Article 52' },
        { value: 1, content: 'President of India' },
        { value: 2, content: 'Article 53' },
        { value: 2, content: 'Executive Power of the President' },
        { value: 3, content: 'Article 54' },
        { value: 3, content: 'Election of the President' },
        { value: 4, content: 'Article 55' },
        { value: 4, content: 'Manner of election of President' },
        { value: 5, content: 'Article 56' },
        { value: 5, content: 'Term of Office of President' },
        { value: 6, content: 'Article 57' },
        { value: 6, content: 'Eligibility for Re-election' },
        { value: 7, content: 'Article 58' },
        { value: 7, content: 'Qualifications for Election as president' },
        { value: 8, content: 'Article 59' },
        { value: 8, content: 'Conditions of the Presidents office' },
        { value: 9, content: 'Article 60' },
        { value: 9, content: 'Oath or affirmation by the president' },
        { value: 10, content: 'Article 61' },
        { value: 10, content: 'Procedure for impeachment of the President' },
    ],
    // Level 2 cards
    [
        { value: 1, content: 'Article 79' },
        { value: 1, content: 'Constitution of Parliament of India' },
        { value: 2, content: 'Article 80' },
        { value: 2, content: 'Composition of the Council of states' },
        { value: 3, content: 'Article 81' },
        { value: 3, content: 'Composition of the house of the people' },
        { value: 4, content: 'Article 82' },
        { value: 4, content: 'Readjustment after each sensus' },
        { value: 5, content: 'Article 83' },
        { value: 5, content: 'Duration of houses of parliament' },
        { value: 6, content: 'Article 84' },
        { value: 6, content: 'Qualification for membership of parliament' },
        { value: 7, content: 'Article 85' },
        { value: 7, content: 'Sessions of parliament, pronovation and dissolution' },
        { value: 8, content: 'Article 86' },
        { value: 8, content: 'Right of president to address and send messages to houses' },
        { value: 9, content: 'Article 87' },
        { value: 9, content: 'Special adress by the president' },
        { value: 10, content: 'Article 88' },
        { value: 10, content: 'Rights of ministersand attorney general as respects houses' },
    ],
    // Level 3 cards
    [
        { value: 1, content: 'Article 123' },
        { value: 1, content: 'Power of President to promulgate Ordinances during recess of Parliament' },
        { value: 2, content: 'Article 124' },
        { value: 2, content: 'Establishment and constitution of Supreme Court' },
        { value: 3, content: 'Article 125' },
        { value: 3, content: 'Salaries of Supreme Court judges' },
        { value: 4, content: 'Article 126' },
        { value: 4, content: 'Appointment of acting Chief Justice' },
        { value: 5, content: 'Article 127' },
        { value: 5, content: 'Appointment of ad hoc judges' },
        { value: 6, content: 'Article 128' },
        { value: 6, content: 'Attendance of retired judges at sittings of the Supreme Court' },
        { value: 7, content: 'Article 129' },
        { value: 7, content: 'Supreme Court to be a court of record' },
        { value: 8, content: 'Article 130' },
        { value: 8, content: 'Supreme Court to be a court of record' },
        { value: 9, content: 'Article 131' },
        { value: 9, content: 'Original jurisdiction of the Supreme Court' },
        { value: 10, content: 'Article 132' },
        { value: 10, content: 'Appellate jurisdiction of the Supreme Court in constitutional matters' },
    ],
    // Level 4 cards
    [
        { value: 1, content: 'Article 148' },
        { value: 1, content: 'Comptroller and Auditor-General of India' },
        { value: 2, content: 'Article 149' },
        { value: 2, content: 'Duties and Powers of the Comptroller and Auditor-General' },
        { value: 3, content: 'Article 150' },
        { value: 3, content: 'Form of Accounts of the Union and of the States' },
        { value: 4, content: 'Article 151' },
        { value: 4, content: 'Audit Reports' },
        { value: 5, content: 'Article 152' },
        { value: 5, content: 'Definition of The States' },
        { value: 6, content: 'Article 153' },
        { value: 6, content: 'Governors of States' },
        { value: 7, content: 'Article 154' },
        { value: 7, content: 'Executive power of State' },
        { value: 8, content: 'Article 155' },
        { value: 8, content: 'Appointment of Governor' },
        { value: 9, content: 'Article 156' },
        { value: 9, content: 'Term of office of Governor' },
        { value: 10, content: 'Article 157' },
        { value: 10, content: 'Qualifications for appointment as Governor' },
    ]
];

let flippedCards = [];
let matchedCards = 0;
let currentLevel = 0;

const gameBoard1 = document.getElementById('level-1');
const gameBoard2 = document.getElementById('level-2');
const gameBoard3 = document.getElementById('level-3');
const gameBoard4 = document.getElementById('level-4');

const level2Button = document.getElementById('level-2-button');
const level3Button = document.getElementById('level-3-button');
const level4Button = document.getElementById('level-4-button');

// Shuffle the cards
function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Create card elements
function createCardElement(cardData, board) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = cardData.value;

    const front = document.createElement('div');
    front.classList.add('front');
    front.textContent = 'Flip it!';

    const back = document.createElement('div');
    back.classList.add('back');
    back.textContent = cardData.content;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', flipCard);

    board.appendChild(card);
}

// Flip the card
function flipCard() {
    if (flippedCards.length === 2) return;

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkForMatch();
    }
}

// Check for a match
function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        setTimeout(() => {
            card1.classList.add('hidden');
            card2.classList.add('hidden');
        }, 500);
        matchedCards += 2;

        if (matchedCards === levelsData[currentLevel].length) {
            moveToNextLevel();
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }, 1000);
    }

    flippedCards = [];
}

// Move to the next level
function moveToNextLevel() {
    if (currentLevel === 0) {
        level2Button.disabled = false;
        level2Button.classList.add('enabled');
        level2Button.addEventListener('click', startLevel2);
    } else if (currentLevel === 1) {
        level3Button.disabled = false;
        level3Button.classList.add('enabled');
        level3Button.addEventListener('click', startLevel3);
    } else if (currentLevel === 2) {
        level4Button.disabled = false;
        level4Button.classList.add('enabled');
        level4Button.addEventListener('click', startLevel4);
    }

    matchedCards = 0;
    currentLevel++;
}

// Start Level 1
function startLevel1() {
    const shuffledCards = shuffleCards([...levelsData[0]]);
    shuffledCards.forEach(cardData => {
        createCardElement(cardData, gameBoard1);
    });
}

// Start Level 2
function startLevel2() {
    gameBoard1.style.display = 'none';
    gameBoard2.style.display = 'grid';
    const shuffledCards = shuffleCards([...levelsData[1]]);
    shuffledCards.forEach(cardData => {
        createCardElement(cardData, gameBoard2);
    });
}

// Start Level 3
function startLevel3() {
    gameBoard2.style.display = 'none';
    gameBoard3.style.display = 'grid';
    const shuffledCards = shuffleCards([...levelsData[2]]);
    shuffledCards.forEach(cardData => {
        createCardElement(cardData, gameBoard3);
    });
}

// Start Level 4
function startLevel4() {
    gameBoard3.style.display = 'none';
    gameBoard4.style.display = 'grid';
    const shuffledCards = shuffleCards([...levelsData[3]]);
    shuffledCards.forEach(cardData => {
        createCardElement(cardData, gameBoard4);
    });
}

// Initialize Level 1
startLevel1();
