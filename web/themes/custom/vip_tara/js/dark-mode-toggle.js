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
Drupal.behaviors.darkModeToggle = {
  attach: function (context, settings) {

    'use strict';

    const body = document.body;

    // Toggle behavior
    const toggleButtons = document.getElementsByClassName('darkModeToggle');
    for (let toggleButton of toggleButtons) {
      toggleButton.addEventListener('click', function () {
        if (this.classList.contains('dark-mode-only')) {
          document.body.classList.add('light-mode');
          document.body.classList.remove('dark-mode');
          localStorage.setItem('color-scheme', 'light');
        } else {
          document.body.classList.add('dark-mode');
          document.body.classList.remove('light-mode');
          localStorage.setItem('color-scheme', 'dark');
        }
      });
    }
  }
};
