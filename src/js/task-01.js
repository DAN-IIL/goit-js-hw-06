
// NUMBER 1
const navItemEl = categories.querySelectorAll('.item');
const getItemEl = navItemEl.length;

console.log(`Number of categories: ${getItemEl}`);


// NUMBER 2
const firstEl = categories.firstElementChild;
const getFirstEl = firstEl.firstElementChild.textContent;
console.log(`Category: ${getFirstEl}`);

const amountFirstEl = firstEl.lastElementChild;
console.log("Elements:", amountFirstEl.children.length);



const secondEl = firstEl.nextElementSibling;
const getSecondEl = secondEl.firstElementChild.textContent;
console.log(`Category: ${getSecondEl}`);

const amountSecondEl = secondEl.lastElementChild;
console.log("Elements:", amountSecondEl.children.length);



const lastEl = categories.lastElementChild;
const getLastEl = lastEl.firstElementChild.textContent;
console.log(`Category: ${getLastEl}`);

const amountLastEl = lastEl.lastElementChild;
console.log("Elements:", amountLastEl.children.length);
