document.getElementById('mainSearchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const query = this.value;
        if (query.trim() !== "") {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
        }
    }
});

