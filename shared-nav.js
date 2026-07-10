/* shared-nav.js — vintage diner theme */
(function () {
  const p = document.body.dataset.page || '';

  const nav = `
<nav id="navbar">
  <a href="index.html" class="nav-logo">
    <img src="academy-img.png" alt="ACADEMY Evergreen Burger" width="30%" height="auto" >
  </a>
  <ul class="nav-links">
    <li><a href="index.html"    class="${p==='home'     ?'active':''}">Home</a></li>
    <li><a href="menu.html"     class="${p==='menu'     ?'active':''}">Menù & Sedi</a></li>
    <li><a href="sfide.html"    class="${p==='sfide'    ?'active':''}">Le Sfide</a></li>
    <li><a href="contatti.html" class="${p==='contatti' ?'active':''}">Contatti</a></li>
  </ul>
</nav>`;

  const anchor = document.getElementById('ticker-anchor');
  if (anchor) anchor.insertAdjacentHTML('afterend', nav);
})();
