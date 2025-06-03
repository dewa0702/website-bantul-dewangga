    VanillaTilt.init(document.querySelectorAll('.tourist-image img'), {
            max: 20,
            speed: 400,
            glare: true,
            "max-glare": 0.3,
        });

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle-dark');
  const currentMode = localStorage.getItem('darkMode');

  if (currentMode === 'enabled') {
    document.body.classList.add('dark-mode');
    if (toggle) toggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        toggle.innerHTML = '<i class="fas fa-sun"></i>';
      } else {
        localStorage.setItem('darkMode', 'disabled');
        toggle.innerHTML = '<i class="fas fa-moon"></i>';
      }
    });
  }
}); 
