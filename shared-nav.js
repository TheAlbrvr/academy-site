/* shared-nav.js — vintage diner theme */
(function () {
  const p = document.body.dataset.page || '';

  const nav = `
<nav id="navbar">
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-badge">🍔</div>
    <div class="nav-logo-text">
      <span class="t1">ACADEMY</span>
      <span class="t2">Evergreen Burger</span>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="index.html"    class="${p==='home'     ?'active':''}">Home</a></li>
    <li><a href="menu.html"     class="${p==='menu'     ?'active':''}">Menù & Sedi</a></li>
    <li><a href="sfide.html"    class="${p==='sfide'    ?'active':''}">Le Sfide</a></li>
    <li><a href="contatti.html" class="${p==='contatti' ?'active':''}">Contatti</a></li>
  </ul>
  <a href="https://www.cooperto.link/e19e38" target="_blank" class="nav-cta">🛒 Ordina ora</a>
  <div class="nav-hamburger" id="hamburgerBtn"><span></span><span></span><span></span></div>
</nav>
<div class="nav-mobile-menu" id="mobileMenu">
  <a href="index.html"    class="${p==='home'     ?'active':''}">🏠 Home</a>
  <a href="menu.html"     class="${p==='menu'     ?'active':''}">📋 Menù & Sedi</a>
  <a href="sfide.html"    class="${p==='sfide'    ?'active':''}">🏆 Le Sfide</a>
  <a href="contatti.html" class="${p==='contatti' ?'active':''}">📞 Contatti</a>
  <a href="https://www.cooperto.link/e19e38" target="_blank" style="color:var(--yellow)">🛒 Ordina Online</a>
</div>`;

  const ticker = `
<div class="ticker-strip">
  <div class="ticker-inner">
    <div class="ticker-item"><span class="star">★</span> Qualità Vera</div>
    <div class="ticker-item"><span class="star">★</span> Tutto XXL</div>
    <div class="ticker-item"><span class="star">★</span> Chicago Pizza</div>
    <div class="ticker-item"><span class="star">★</span> Ingredienti Selezionati</div>
    <div class="ticker-item"><span class="star">★</span> Burrito &amp; Hot Dog</div>
    <div class="ticker-item"><span class="star">★</span> 40+ Ricette</div>
    <div class="ticker-item"><span class="star">★</span> Bakery Artigianale</div>
    <div class="ticker-item"><span class="star">★</span> American Pizza</div>
    <div class="ticker-item"><span class="star">★</span> Qualità Vera</div>
    <div class="ticker-item"><span class="star">★</span> Tutto XXL</div>
    <div class="ticker-item"><span class="star">★</span> Chicago Pizza</div>
    <div class="ticker-item"><span class="star">★</span> Ingredienti Selezionati</div>
    <div class="ticker-item"><span class="star">★</span> Burrito &amp; Hot Dog</div>
    <div class="ticker-item"><span class="star">★</span> 40+ Ricette</div>
    <div class="ticker-item"><span class="star">★</span> Bakery Artigianale</div>
    <div class="ticker-item"><span class="star">★</span> American Pizza</div>
  </div>
</div>`;

  const footer = `
<footer>
  <div class="footer-grid">
    <div>
      <div class="footer-logo">ACADEMY</div>
      <div class="footer-logo-sub">Evergreen Burger · Bakery &amp; American Pizza</div>
      <p class="footer-tagline">L'Accademia del Burger XXL. Qualità vera, ingredienti selezionati, porzioni che non lasciano mai fame. Due sedi, una sola filosofia.</p>
      <div class="footer-socials">
        <a href="https://www.instagram.com/academy_evergreenburger/" target="_blank" class="social-link">📸</a>
        <a href="https://www.facebook.com/Academy-evergreen-burger" target="_blank" class="social-link">📘</a>
        <a href="https://wa.me/39XXXXXXXXXX" target="_blank" class="social-link">💬</a>
      </div>
    </div>
    <div>
      <h4 class="footer-col-title">Navigazione</h4>
      <ul class="footer-list">
        <li><a href="index.html">Home</a></li>
        <li><a href="menu.html">Menù &amp; Sedi</a></li>
        <li><a href="sfide.html">Le Sfide</a></li>
        <li><a href="contatti.html">Contatti</a></li>
      </ul>
    </div>
    <div>
      <h4 class="footer-col-title">Le Sedi</h4>
      <ul class="footer-list">
        <li>📍 <strong style="color:rgba(255,255,255,0.7)">Bovolenta</strong><br>Piazza Accademia 24, 35024</li>
        <li>📍 <strong style="color:rgba(255,255,255,0.7)">Valli di Chioggia</strong><br>Via [DA INSERIRE]</li>
        <li><a href="https://www.cooperto.link/e19e38" target="_blank">🛒 Ordina – Bovolenta</a></li>
        <li><a href="#" target="_blank">🛒 Ordina – Valli</a></li>
      </ul>
    </div>
    <div>
      <h4 class="footer-col-title">Orari</h4>
      <div class="footer-hours-item"><span>Lun–Mar</span><span style="color:rgba(255,80,80,0.7)">Chiuso</span></div>
      <div class="footer-hours-item"><span>Mer–Ven</span><span>00:00 – 00:00</span></div>
      <div class="footer-hours-item"><span>Sabato</span><span>00:00 – 00:00</span></div>
      <div class="footer-hours-item"><span>Domenica</span><span>00:00 – 00:00</span></div>
      <p style="font-size:.72rem;color:rgba(255,255,255,.28);margin-top:10px;font-style:italic">* Verifica sempre su Instagram</p>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="footer-copy">© 2025 ACADEMY Evergreen Burger. Tutti i diritti riservati.</p>
    <p class="footer-copy">P.IVA [DA INSERIRE]</p>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', nav);
  const anchor = document.getElementById('ticker-anchor');
  if (anchor) anchor.insertAdjacentHTML('afterend', ticker);

  document.body.insertAdjacentHTML('beforeend', footer);

  window.addEventListener('scroll', () => {
    document.getElementById('navbar').style.boxShadow =
      window.scrollY > 40 ? '0 6px 24px rgba(0,0,0,0.4)' : '0 4px 0 var(--navy)';
  });

  document.getElementById('hamburgerBtn').addEventListener('click', () =>
    document.getElementById('mobileMenu').classList.toggle('open'));
  document.addEventListener('click', e => {
    const m = document.getElementById('mobileMenu');
    const b = document.getElementById('hamburgerBtn');
    if (!m.contains(e.target) && !b.contains(e.target)) m.classList.remove('open');
  });

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((en, i) => {
      if (en.isIntersecting) {
        setTimeout(() => en.target.classList.add('visible'), (i % 5) * 90);
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();
