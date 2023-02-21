const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemPotatoes = document.createElement('li');
const potatoes = ingredients[0];
const getPotatoes = `<li class="potatoes">${potatoes}</li>`;

const itemMushrooms = document.createElement('li');
const mushrooms = ingredients[1];
const getMushrooms = `<li class="mushrooms">${mushrooms}</li>`;

const itemGarlic = document.createElement('li');
const garlic = ingredients[2];
const getGarlic = `<li class="garlic">${garlic}</li>`;

const itemTomatos = document.createElement('li');
const tomatos = ingredients[3];
const getTomatos = `<li class="tomatos">${tomatos}</li>`;

const itemHerbs = document.createElement('li');
const herbs = ingredients[4];
const getHerbs = `<li class="herbs">${herbs}</li>`;

const itemCondiments = document.createElement('li');
const condiments = ingredients[5];
const getCondiments = `<li class="condiments">${condiments}</li>`;


const listIngredients = document.querySelector('#ingredients');

listIngredients.insertAdjacentHTML("beforeend", getPotatoes);
listIngredients.insertAdjacentHTML("beforeend", getMushrooms);
listIngredients.insertAdjacentHTML("beforeend", getGarlic);
listIngredients.insertAdjacentHTML("beforeend", getTomatos);
listIngredients.insertAdjacentHTML("beforeend", getHerbs);
listIngredients.insertAdjacentHTML("beforeend", getCondiments);