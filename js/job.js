function scrollByPercentage(percentage) {
    const scrollAmount = (window.innerHeight * percentage) / 100;
    window.scrollBy({
        top: scrollAmount,
        left: 0,
        behavior: 'smooth',
    });
}

// "Start Searching" button scrolls down by 50% of the viewport
const startSearchingBtn = document.getElementById('start-searching-btn');
startSearchingBtn.addEventListener('click', () => scrollByPercentage(50));

// "Browse Jobs" button scrolls down by 100% of the viewport
const browseJobsBtn = document.getElementById('browse-jobs-btn');
browseJobsBtn.addEventListener('click', () => scrollByPercentage(80));

