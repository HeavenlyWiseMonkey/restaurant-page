import hotChocolateImg from '../img/hotChocolate.jpeg';
import greenTeaImg from '../img/greenTea.jpeg';
import bigMacImg from '../img/bigMac.jpeg';
import cheeseBurgerImg from '../img/cheeseBurger.jpeg';
import cheeseBurgerHashBrownImg from '../img/cheeseBurgerHashBrown.jpeg';
import chickenNuggetImg from '../img/chickenNugget.jpeg';
import frenchFriesImg from '../img/frenchFries.jpeg';
import mcChickenImg from '../img/mcChicken.jpeg';

const menuItem = function (title, price, image) {
    const itemElement = document.createElement('div');
    const titleElement = document.createElement('h2');
    const priceElement = document.createElement('h3');
    const imageElement = document.createElement('img');

    titleElement.innerHTML = title;
    priceElement.textContent = price;
    imageElement.src = image;
    imageElement.classList.add('menuImg');
    
    itemElement.appendChild(titleElement);
    itemElement.appendChild(priceElement);
    itemElement.appendChild(imageElement);

    itemElement.classList.add('menuItem');

    return itemElement;
}

const menuLoad = function () {
    const content = document.querySelector('#content');
    content.textContent = '';
    const headline = document.createElement('h1');
    headline.textContent = 'Menu';
    const beverages = document.createElement('h2');
    beverages.textContent = 'Beverages';
    const hotChocolate = menuItem('Hot Chocolate', '$1.00', hotChocolateImg);
    const greenTea = menuItem('Green Tea', '$1.05', greenTeaImg);
    const main = document.createElement('h2');
    main.textContent = 'Main Dishes';
    const fatMac = menuItem('Fat Mac', '$5.00', bigMacImg);
    const cheeseBurger = menuItem('Cheeseburger', '$2.00', cheeseBurgerImg);
    const cheeseBurgerHashBrown = menuItem('Cheeseburger <br> with hashbrowns', '$3.00', cheeseBurgerHashBrownImg);
    const chickenNugget = menuItem('Chicken Nuggets', '$3.00', chickenNuggetImg);
    const frenchFries = menuItem('French Fries', '$2.00', frenchFriesImg);
    const chickenBurger = menuItem('Chickenburger', '$3.00', mcChickenImg);
    
    content.appendChild(headline);
    content.appendChild(beverages);
    content.appendChild(hotChocolate);
    content.appendChild(greenTea);
    content.appendChild(main);
    content.appendChild(fatMac);
    content.appendChild(cheeseBurger);
    content.appendChild(cheeseBurgerHashBrown);
    content.appendChild(chickenNugget);
    content.appendChild(frenchFries);
    content.appendChild(chickenBurger);
}

export default menuLoad;