import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

// Test the random functions
console.log(getRandomListEntry(recipes));


function recipeTemplate(recipe) {
    return `
        <div class="recipe">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-info">
                <span class="tag">${tagsTemplate(recipe.tags)}</span>
                <h2>${recipe.name}</h2>
                <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${ratingTemplate(recipe.rating)}
                </div>
                <p class="description">${recipe.description}</p>
            </div>
        </div>
    `;
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating ? `<span aria-hidden="true" class="icon-star">⭐</span>` : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
    html += `</span>`;
    return html;
}

// Test the template functions
const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));


function renderRecipes(recipeList) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

// Initialize the page with a random recipe
init();



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
