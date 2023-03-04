// NUMBER 1
const allItemEl = categories.querySelectorAll('.item');
console.log('Number of categories:', allItemEl.length);


// NUMBER 2
for (const item of allItemEl) {
    const itemTitleEl = item.querySelector('h2');
    const getTitleEl = itemTitleEl.textContent;
    const itemAmountEl = item.querySelector('ul');
    const getAmountEl = itemAmountEl.children.length;

    console.log(`Category: ${getTitleEl}`);
    console.log(`Elements: ${getAmountEl}`);
};