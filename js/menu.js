const menuApp = () => {
  const $body = document.querySelector('body');
  const $menu = document.querySelector('[data-menu]');
  const $button = document.querySelector('[data-toggle="menu"]');

  const closeMenu = () => {
    $menu.dataset.menu = 'close';
    $button.setAttribute('aria-expanded', 'false');
    $button.setAttribute('aria-label', 'Открыть меню');
    $body.style.overflowY = 'auto';
  };

  const openMenu = () => {
    $menu.dataset.menu = 'open';
    $button.setAttribute('aria-expanded', 'true');
    $button.setAttribute('aria-label', 'Закрыть меню');
    $body.style.overflowY = 'hidden';
  };

  const toggleMenu = () => ($menu.dataset.menu === 'close') ? openMenu() : closeMenu();

  $button.addEventListener('click', () => {
    toggleMenu();
  });

  document.addEventListener('keyup', (evt) => {
    if (evt.code === 'Escape') {
      closeMenu();
    }
  });


};

menuApp();
