function classToggleRunner() {
    const navs = document.querySelectorAll('.navigation-items-toggle')
    
    navs.forEach(nav => nav.classList.toggle('navigation-toggle-show'));
  }
  document.querySelector('.navigation-link-toggle')
    .addEventListener('click', classToggleRunner);