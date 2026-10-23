// Google Analytics bootstrap. Kept in a module (not an inline <script>) so the CSP can forbid inline scripts.
window.dataLayer = window.dataLayer || [];
window.gtag = function gtag() {
  // gtag.js requires the Arguments object itself, not an array copy.
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer!.push(arguments);
};

const id = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
if (id) {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
  window.gtag('js', new Date());
  window.gtag('config', id, { send_page_view: true });
}

export {};
