import cardTemplate from '../templates/menu-card.hbs';
import cardContent from '../menu.json';

// Theme Switcher

const body = document.querySelector('body');

const switchController = document.querySelector('div.theme-switch__control');

const switchToggle = document.querySelector('input.theme-switch__toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function defaultTheme() {
  const localTheme = localStorage.getItem('defaultTheme');

  if (localTheme === 'dark-theme') {
    body.classList.add(Theme.DARK);
    switchToggle.checked = true;
  } else {
    body.classList.add(Theme.LIGHT);
    switchToggle.checked = false;
  };
};

function changeTheme() {
  body.classList.toggle(Theme.DARK);
  body.classList.toggle(Theme.LIGHT);
  
  localStorage.setItem('defaultTheme', body.classList);
};

defaultTheme();
switchController.addEventListener('change', changeTheme);

// Menu Creator

const menuUl = document.querySelector('ul.menu')

menuUl.insertAdjacentHTML('beforeend', cardTemplate(cardContent))