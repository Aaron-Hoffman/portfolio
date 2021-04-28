const mobileNav = document.querySelector('#mobileNav');
const navItems = document.querySelector('#navItems');

mobileNav.addEventListener('click', () => {
    navItems.classList.toggle('on');
})