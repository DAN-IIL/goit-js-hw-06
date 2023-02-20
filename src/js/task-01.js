
// NUMBER 1
const navItemEl = document.querySelectorAll('.item');
const getItemEl = navItemEl.length;

console.log(`Number of categories: ${getItemEl}`);


// NUMBER 2
const navTitleEl = document.querySelector('h2');
const getTitleEl = navTitleEl.textContent;

console.log(`Category: ${getTitleEl}`);



// const getNumberEl = navNumberEl.length;
// const getNumberEl = navNumberEl;

// console.log(`Elements: ${getNumberEl}`);



function getNumberEl() {
    const navNumberEl = document.querySelectorAll('.item li');

    for (const item of navNumberEl) {
        const item = item.length;
      return `Elements: ${item}`;
    };
};

console.log(getNumberEl());



