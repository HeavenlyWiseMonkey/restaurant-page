import homeLoad from './functions/homeLoad';
import menuLoad from './functions/menuLoad';
import contactLoad from './functions/contactLoad';
import './index.css';

homeLoad();

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

home.addEventListener('click', () => {
    homeLoad();
});

menu.addEventListener('click', () => {
    menuLoad();
});

contact.addEventListener('click', () => {
    contactLoad();
});