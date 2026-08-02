// Akmal Aref portfolio — scroll-spy for the circuit trace navigation.
// Highlights the nav node matching the section currently in view.

(function () {
  const sections = document.querySelectorAll('main .station');
  const navLinks = document.querySelectorAll('.trace-nav a');

  if (!sections.length || !navLinks.length) return;

  const linkByHref = new Map();
  navLinks.forEach((link) => {
    linkByHref.set(link.getAttribute('href'), link);
  });

  const setActive = (id) => {
    navLinks.forEach((link) => link.classList.remove('is-active'));
    const active = linkByHref.get('#' + id);
    if (active) active.classList.add('is-active');
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }
})();
