import recipes from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipesContainer = document.getElementById('recipes');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    function displayRecipes(recipes) {
        recipesContainer.innerHTML = '';
        recipes.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.className = 'recipe';
            recipeElement.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="recipe-info">
                    <span class="tag">${recipe.tag}</span>
                    <h2>${recipe.name}</h2>
                    <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                        ${'⭐'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}
                    </div>
                    <p class="description">${recipe.description}</p>
                </div>
            `;
            recipesContainer.appendChild(recipeElement);
        });
    }

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(query));
        displayRecipes(filteredRecipes);
    });

    displayRecipes(recipes);
});
