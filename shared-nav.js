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
      <p class="footer-tagline">L'Accademia del Burger XXL. Qualità vera, ingredienti selezionati, porzioni che non lasciano mai fame.</p>
      <div class="footer-company-info">
        <strong>Academy Evergreen Burger S.r.l.</strong><br>
        Via Roma, 12 - 35024 Bovolenta (PD)<br>
        REA: PD - 123456
      </div>
    </div>
    
    <div>
      <h4 class="footer-col-title">Navigazione</h4>
      <ul class="footer-list">
        <li><a href="index.html">Home</a></li>
        <li><a href="menu.html">Menù &amp; Sedi</a></li>
        <li><a href="sfide.html">Le Sfide</a></li>
        <li><a href="contatti.html">Contatti</a></li>
        <li class="footer-list-spacer"></li>
        <li><a href="privacy-policy.html">Privacy Policy</a></li>
        <li><a href="cookie-policy.html">Cookie Policy</a></li>
      </ul>
    </div>
  

    <div>
      <h4 class="footer-col-title">Seguici</h4>
      <p class="footer-tagline" style="font-size: 0.85rem;">Condividi le tue sfide XXL sui nostri social!</p>
      <div class="footer-socials">
        <a href="https://instagram.com" target="_blank" class="social-link" aria-label="Instagram">
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="https://facebook.com" target="_blank" class="social-link" aria-label="Facebook">
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0 -5 5v3h-3v4h3v8h4v-8h3l1-4h-4v-3a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
      </div>
      <a href="https://www.cooperto.link/e19e38" target="_blank" class="btn-yellow" style="margin-top: 20px; padding: 6px 12px; font-size: 0.75rem;">🛒 Prenota Ora</a>
    </div>
  </div>
  
  <div class="footer-bottom">
    <p class="footer-copy">© 2026 ACADEMY Evergreen Burger. Tutti i diritti riservati.</p>
    <p class="footer-piva">P.IVA: INSERIRE_PARTITA_IVA</p>
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
