"use strict";
{
  const toggleMenu = document.querySelector('.toggle-menu');
  const menu = document.querySelector('.header-site-menu');

  toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('open');
    menu.classList.toggle('open');
  })
}