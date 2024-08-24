document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
});


function freezePage() {
    document.documentElement.style.overflow = 'hidden'; // Disable scrolling
    document.body.style.overflow = 'hidden'; // Ensure no scrollbars
    document.documentElement.style.height = '100%'; // Prevent height adjustment
    document.body.style.height = '100%'; // Prevent height adjustment
  }
  
  function unfreezePage() {
    document.documentElement.style.overflow = ''; // Re-enable scrolling
    document.body.style.overflow = ''; // Re-enable scrollbars
    document.documentElement.style.height = ''; // Allow height adjustment
    document.body.style.height = ''; // Allow height adjustment
  }
  
  // Call freezePage() when you need to stop scrolling
  