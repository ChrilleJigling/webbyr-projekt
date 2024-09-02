let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    var navbarChecklist;
    if (document.querySelector('.checklist-nav')) {
        navbarChecklist = document.querySelector('.checklist-nav');
    }
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('hidden');
        if (document.querySelector('.checklist-nav')) {
            navbarChecklist.classList.add('hidden');
        }
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
        if (document.querySelector('.checklist-nav')) {
            navbarChecklist.classList.remove('hidden');
        }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        // Collapse all other items
        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
            }
        });
        // Toggle 'active' class on the clicked item
        item.classList.toggle('active');
    });
});

const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    navMenu.classList.toggle('open');
});

function scrollToElement(id) {
    const element = document.getElementById(id);  // Get the element by its ID
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'center'     // Center the element vertically in the viewport
        });
    } else {
        console.warn(`Element with ID '${id}' not found.`);
    }
}