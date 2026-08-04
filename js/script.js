/* ============================================================
   SHARED SITE SCRIPT
   Linked by every page. Right now it does one job: opens and
   closes the mobile navigation menu (the "Menu" button that
   appears on narrow screens).
   ============================================================ */

// Wait for the page to load, then wire up the menu button.
document.addEventListener('DOMContentLoaded', function () {

  // Find this page's menu button and the list of links it controls.
  var toggleButton = document.getElementById('nav-toggle');
  var linksList = document.getElementById('nav-links');

  // Some pages might not have a menu button — stop safely if so.
  if (!toggleButton || !linksList) return;

  // When the button is clicked, show/hide the links and flip the
  // aria-expanded flag (screen readers use this to announce state).
  toggleButton.addEventListener('click', function () {
    var isOpen = linksList.classList.toggle('is-open');
    toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

});
