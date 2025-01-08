// Function to toggle between light and dark themes
function toggleTheme() {
    try {
        const body = document.body;
        body.classList.toggle('light-theme');
        const theme = body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        
        // Optional: Update theme toggle button or icon
        const themeToggleButton = document.getElementById('theme-toggle');
        if (themeToggleButton) {
            themeToggleButton.setAttribute('aria-label', 
                theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'
            );
        }
    } catch (error) {
        console.error('Error toggling theme:', error);
    }
}

// Apply theme change on page load
document.addEventListener('DOMContentLoaded', function() {
    // Select all navbar links
    const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Smooth scroll to the section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile navbar if it's open (for responsive design)
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    if (navbarToggler) {
                        navbarToggler.click(); // This will close the mobile menu
                    }
                }
            }
        });
    });
});