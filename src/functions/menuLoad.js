const menuLoad = function () {
    const content = document.querySelector('#content');
    content.textContent = '';
    const headline = document.createElement('h1');
    headline.textContent = 'Menu';
    const beverages = document.createElement('h2');
    beverages.textContent = 'Beverages';
    const hotChocolate = document.createElement('h3');
    hotChocolate.textContent = 'Hot Chocolate';
    const greenTea = document.createElement('h3');
    greenTea.textContent = 'Green Tea';
    content.appendChild(headline);
    content.appendChild(beverages);
    content.appendChild(hotChocolate);
    content.appendChild(greenTea);
}

export default menuLoad;