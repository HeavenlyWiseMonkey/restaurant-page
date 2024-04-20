import homeBurgerImg from '../img/homeBurger.jpeg'

const homeLoad = function() {
    const content = document.querySelector('#content');
    content.textContent = '';
    const headline = document.createElement('h1');
    headline.textContent = 'McFonalds';
    const image = document.createElement('img');
    image.src = homeBurgerImg;
    const description = document.createElement('h3');
    description.textContent = 'The best food you can buy for a cheap price!'
    const box = document.createElement('div');
    box.classList.add('box');
    const hours = document.createElement('h2');
    hours.textContent = ' Hours:';
    const sunday = document.createElement('h3');
    sunday.textContent = 'Sunday: 7am - 6am';
    const monday = document.createElement('h3');
    monday.textContent = 'Monday: 9am - 5pm';
    const tuesday = document.createElement('h3');
    tuesday.textContent = 'Tuesday: 3am - 2am';
    const wednesday = document.createElement('h3');
    wednesday.textContent = 'Wednesday: 5pm - 1am';
    const thursday = document.createElement('h3');
    thursday.textContent = 'Thursday: 6am - 8pm';
    const friday = document.createElement('h3');
    friday.textContent = 'Friday: 12am - 12pm';
    const saturday = document.createElement('h3');
    saturday.textContent = 'Satuday: 7am - 8am';
    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(description);
    box.appendChild(hours);
    box.appendChild(sunday);
    box.appendChild(monday);
    box.appendChild(tuesday);
    box.appendChild(wednesday);
    box.appendChild(thursday);
    box.appendChild(friday);
    box.appendChild(saturday);
    content.appendChild(box);
}

export default homeLoad;