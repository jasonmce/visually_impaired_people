/**
 * @file
 * Dark mode behaviors.
 * 
 * Requires a block exists with dark mode toggle buttons like this:
 * <p>
 *   <button class="darkModeToggle light-mode-only" aria-label="Use dark mode">Use dark mode</button>
 *   <button class="darkModeToggle dark-mode-only" aria-label="Use light mode">Use light mode</button>
 * </p>
 */
(function () {

  'use strict';

  const body = document.body;

  function useDarkMode() {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
  }

  function useLightMode() {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
  }

  const storedPreference = localStorage.getItem('color-scheme');

  if (storedPreference === 'dark') {
    useDarkMode();
  }
  // No stored preference: follow system preference
  if (!['dark', 'light'].includes(storedPreference)) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      useDarkMode();
    }
  }

  // Toggle behavior
  const toggleButtons = document.getElementsByClassName('darkModeToggle');
  for (let toggleButton of toggleButtons) {
    toggleButton.addEventListener('click', function () {
      if (body.classList.contains('dark-mode')) {
        useLightMode();
        localStorage.setItem('color-scheme', 'light');
      } else {
        useDarkMode();
        localStorage.setItem('color-scheme', 'dark');
      }
    });
  }
}());

