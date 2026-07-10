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

// Sostituisci la variabile footer esistente con questa:
const footer = `
<footer class="site-footer">
  <div class="footer-grid">
    
    <div class="footer-col">
      <img src="academy-img.png" alt="Academy Logo" class="footer-logo">
      <p>L'originale Evergreen Burger. Qualità, porzioni XXL e una passione senza compromessi per il gusto autentico.</p>
    </div>

    <div class="footer-col">
      <h3>Esplora</h3>
      <a href="index.html">Home</a>
      <a href="menu.html">Menù & Sedi</a>
      <a href="sfide.html">Le Sfide</a>
      <a href="contatti.html">Contatti</a>
    </div>

  </div>

  <div class="footer-bottom">
    <p>© 2026 ACADEMY Evergreen Burger. by <a href="https://www.instagram.com/alberto.vegro?igsh=N2Jhb2xiYXM1enQ5">Vegro Alberto</a> Tutti i diritti riservati.
   <br>
   <a href="https://www.iubenda.com/privacy-policy/34022629" class="iubenda-white iubenda-noiframe iubenda-embed" title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
   <br>
   <a href="https://www.iubenda.com/privacy-policy/34022629/cookie-policy" class="iubenda-white iubenda-noiframe iubenda-embed" title="Cookie Policy ">Cookie Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
   </p>
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
