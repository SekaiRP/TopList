const searchInput = document.querySelector('.search-input');
const animeItems = document.querySelectorAll('.anime-item');

searchInput.addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();

    animeItems.forEach(function (item) {
        const animeTitle = item.querySelector('.anime-title').textContent.toLowerCase();
        const characterNames = item.querySelectorAll('.character-name');

        let foundMatch = false;

        characterNames.forEach(function (name) {
            const characterName = name.textContent.toLowerCase();

            if (animeTitle.includes(searchQuery) || characterName.includes(searchQuery)) {
                item.style.display = 'block';
                foundMatch = true;
            } else {
                item.style.display = 'none';
            }
        });

        if (foundMatch) {
            item.style.display = 'block';
        }
    });
});
