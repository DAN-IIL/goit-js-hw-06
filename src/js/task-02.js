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
itemPotatoes.textContent = potatoes;
itemPotatoes.classList.add('potatoes');

console.log(itemPotatoes);

const itemMushrooms = document.createElement('li');
const mushrooms = ingredients[1];
itemMushrooms.textContent = mushrooms;
itemMushrooms.classList.add('mushrooms');

console.log(itemMushrooms);

const itemGarlic = document.createElement('li');
const garlic = ingredients[2];
itemGarlic.textContent = garlic;
itemGarlic.classList.add('garlic');

console.log(itemGarlic);

const itemTomatos = document.createElement('li');
const tomatos = ingredients[3];
itemTomatos.textContent = tomatos;
itemTomatos.classList.add('tomatos');

console.log(itemTomatos);

const itemHerbs = document.createElement('li');
const herbs = ingredients[4];
itemHerbs.textContent = herbs;
itemHerbs.classList.add('herbs');

console.log(itemHerbs);

const itemCondiments = document.createElement('li');
const condiments = ingredients[5];
itemCondiments.textContent = condiments;
itemCondiments.classList.add('condiments');

console.log(itemCondiments);