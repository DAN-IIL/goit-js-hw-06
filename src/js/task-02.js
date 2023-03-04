const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const setListItemEl = ingredients.map(ingredient => {
  const itemEL = document.createElement('li');
  itemEL.classList.add('item');
  itemEL.textContent = ingredient;
  return itemEL;
});

ingredientsEl.append(...setListItemEl);