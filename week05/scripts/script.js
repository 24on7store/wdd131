const products = [
    {id: 1, name: 'Product A'},
    {id: 2, name: 'Product B'},
    {id: 3, name: 'Product C'}
];

// Populate Product Name dropdown
const productNameSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
});

// Track form submission count
window.onload = function() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    console.log(`Review count: ${reviewCount}`);
};


var currentYear = new Date().getFullYear();

var copyrightParagraph = document.getElementById("copyright");
copyrightParagraph.innerHTML = + currentYear;

var lastModifiedParagraph = document.getElementById('lastModified');
var lastModifiedDate = document.lastModified;
lastModifiedParagraph.innerHTML = 'Last Modification: ' + lastModifiedDate;