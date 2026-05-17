function openGoogleSearch() {
    document.getElementById('googleSearchModal').style.display = 'flex';
    document.getElementById('modalSearchInput').focus();
}

function closeGoogleSearch() {
    document.getElementById('googleSearchModal').style.display = 'none';
    document.getElementById('modalSearchInput').value = '';
}

function performGoogleSearch() {
    const query = document.getElementById('modalSearchInput').value.trim();
    if (query === '') return;
    
    const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.open(searchUrl, '_blank');
    closeGoogleSearch();
}

// Tekan Enter di input search
document.getElementById('modalSearchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performGoogleSearch();
    }
});

// Klik di luar modal untuk menutup
document.getElementById('googleSearchModal').addEventListener('click', function(e) {
    if (e.target === this) closeGoogleSearch();
});