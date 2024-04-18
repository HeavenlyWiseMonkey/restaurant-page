import homeLoad from './functions/homeLoad';
import menuLoad from './functions/menuLoad';
import aboutLoad from './functions/aboutLoad';

homeLoad();

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const about = document.querySelector('.about');

home.addEventListener('click', () => {
    homeLoad();
});

menu.addEventListener('click', () => {
    menuLoad();
});

about.addEventListener('click', () => {
    aboutLoad();
});