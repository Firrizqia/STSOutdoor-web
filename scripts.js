let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const itemsToShow = 3;
    const totalItems = items.length;

    currentIndex += direction;

    // Wrap around logic
    if (currentIndex < 0) {
        currentIndex = totalItems - itemsToShow;
    } else if (currentIndex >= totalItems - itemsToShow + 1) {
        currentIndex = 0; 
    }

    const carouselInner = document.querySelector('.carousel-inner');
    const itemWidth = items[0].offsetWidth;
    carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}


// navbar
let nav = document.querySelector("nav");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}

// sercing
// Fungsi untuk melakukan pencarian
function performSearch() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.cardharga');
    let firstVisibleCard = null;

    cards.forEach(card => {
        const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
        if (cardTitle.includes(searchInput)) {
            card.style.display = 'block';
            if (!firstVisibleCard) {
                firstVisibleCard = card;
            }
        } else {
            card.style.display = 'none';
        }
    });

    if (firstVisibleCard) {
        firstVisibleCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

document.getElementById('search-button').addEventListener('click', performSearch);


document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

// Popup

function openPopup(title, description, imageUrl) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-description").innerText = description;
    document.getElementById("popup-image").src = imageUrl;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}


window.onclick = function(event) {
    var popup = document.getElementById("popup");
    if (event.target === popup) {
        closePopup();
    }
}




