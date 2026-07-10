/* shared-nav.js — vintage diner theme */
(function () {
  const p = document.body.dataset.page || '';

  // 1. Template della Navigazione
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
  <a href="https://www.cooperto.link/e19e38" target="_blank" class="nav-cta">🛒 Ordina ora</a>
  <div class="nav-hamburger" id="hamburgerBtn"><span></span><span></span><span></span></div>
</nav>`;

  // 2. Mobile Menu
  const mobileMenu = `
<div class="nav-mobile-menu" id="mobileMenu">
  <a href="index.html"    class="${p==='home'     ?'active':''}">🏠 Home</a>
  <a href="menu.html"     class="${p==='menu'     ?'active':''}">📋 Menù & Sedi</a>
  <a href="sfide.html"    class="${p==='sfide'    ?'active':''}">🏆 Le Sfide</a>
  <a href="contatti.html" class="${p==='contatti' ?'active':''}">📞 Contatti</a>
</div>`;

  // 3. Footer
  const footer = `
<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-col">
        <h3>ACADEMY Evergreen</h3>
        <p>Il tempio dell'eccesso di qualità.</p>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 Academy Evergreen Burger</p>
  </div>
</footer>`;

  // Iniezione nel DOM
  document.body.insertAdjacentHTML('afterbegin', nav + mobileMenu);
  
  const anchor = document.getElementById('ticker-anchor');
  // Se esiste un ticker, lo gestiamo (se presente nel tuo layout)
  if (anchor) anchor.insertAdjacentHTML('afterend', ''); 

  document.body.insertAdjacentHTML('beforeend', footer);

  // --- LOGICA INTERATTIVA ---

  // Effetto Scroll Navbar
  window.addEventListener('scroll', () => {
    const navEl = document.getElementById('navbar');
    if (navEl) {
      navEl.style.boxShadow = window.scrollY > 40 ? '0 6px 24px rgba(0,0,0,0.4)' : '0 4px 0 var(--navy)';
    }
  });

  // Toggle Hamburger Menu
  const hamBtn = document.getElementById('hamburgerBtn');
  const mobMenu = document.getElementById('mobileMenu');
  
  if (hamBtn && mobMenu) {
      hamBtn.addEventListener('click', () => mobMenu.classList.toggle('open'));
      // Chiudi se clicchi fuori
      document.addEventListener('click', e => {
        if (!mobMenu.contains(e.target) && !hamBtn.contains(e.target)) mobMenu.classList.remove('open');
      });
  }

  // Observer per animazioni reveal
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add('visible');
      }
    });
  });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();
