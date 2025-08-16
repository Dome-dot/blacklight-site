// Mobile hamburger toggle
const burger = document.querySelector('.burger');
const drawer = document.getElementById('mobile-menu');
if (burger && drawer) {
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    drawer.hidden = open;
  });
  // Close drawer on link click
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.setAttribute('aria-expanded','false'); drawer.hidden = true;
  }));
}
