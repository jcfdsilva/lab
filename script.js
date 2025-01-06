const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    // Randomly assign blue box-shadow to half of the cards
    if (Math.random() < 0.5) {
        card.style.setProperty('--neon', 'solid 2px #00ffff');
        card.style.setProperty('--neonlight', 'rgba(0,255,255, 0.1)');
        card.style.setProperty('--neonglow', '0 0 20px 0px #00aaff'); // Blue box-shadow
    } else {
        card.style.setProperty('--neon', 'solid 2px #ffa6e7');
        card.style.setProperty('--neonlight', 'rgba(255,166,231, 0.1)');
        card.style.setProperty('--neonglow', '0 0 20px 0px #e9009d'); // Default color (e.g., pink)
    }
});
function flicker(card) {
    const currentNeonGlow = getComputedStyle(card).getPropertyValue('--neonglow').trim();

    if (currentNeonGlow !== '0 0 20px 0px #00aaff') {
        card.style.setProperty('--neonglow', '0 0 9px 0px #e9009d');

        // Add the ::before box-shadow again after 0.5 seconds
        setTimeout(() => {
            card.style.setProperty('--neonglow', '0 0 20px 0px #e9009d');
        }, 50);
    }
    else {
        card.style.setProperty('--neonglow', '0 0 9px 0px #00aaff');

        // Add the ::before box-shadow again after 0.5 seconds
        setTimeout(() => {
            card.style.setProperty('--neonglow', '0 0 20px 0px #00aaff');
        }, 50);
    }
}

function repeatAtRandomIntervals() {
    flicker(cards[Math.floor(Math.random() * cards.length)])
    setTimeout(repeatAtRandomIntervals, Math.random() * (5000 - 1000) + 1000);
}
repeatAtRandomIntervals();

function goto(directory){
    let currentUrl = window.location.href;
    let lastSlashIndex = currentUrl.lastIndexOf("/");
    let newUrl = currentUrl.substring(0, lastSlashIndex)+"/"+directory+currentUrl.substring(lastSlashIndex);
    window.location.href = newUrl;
}