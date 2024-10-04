$(document).ready(function() {
    if ($(window).width() > 1025) {
        var e = 0;
        window.addEventListener("mouseout", function(o) {
            e = o.clientY;
            if (e < 0) {
                $("#exit-booking-popup").addClass("show-popup");
            }
        }, false);
        // Add this only once
        $("#exit-booking-popup").on("mouseleave", function() {
            $("#exit-booking-popup").removeClass("show-popup");
        });
    }
});


/* $( document ).ready(function() {
    $(window).width() > 1025 && ($(function() {
        var e = 0;
        window.addEventListener("mouseout", function(o) {
            (e = o.clientY) < 0 ? $("#exit-booking-popup").addClass("show-popup") : $("#exit-booking-popup").on("mouseleave", function(e) {
                $("#exit-booking-popup").removeClass("show-popup")
            })
        }, !1)
    })
});
 */

document.addEventListener("DOMContentLoaded", function() {
    !function e(o, t) {
        var s = document.querySelectorAll(".hours")
          , n = document.querySelectorAll(".minutes")
          , r = document.querySelectorAll(".seconds");
        function i() {
            var o, i, a = {
                total: i = Date.parse(o = t) - Date.parse(new Date),
                hours: Math.floor(i / 36e5 % 24),
                minutes: Math.floor(i / 1e3 / 60 % 60),
                seconds: Math.floor(i / 1e3 % 60)
            };
            if (a.total <= 0) {
                clearInterval(l);
                for (var c = Date.parse(t), u = Date.parse(new Date); c <= u; )
                    c += 864e5;
                e("countdown", new Date(c))
            } else
                s.forEach(e => {
                    e.innerHTML = ("0" + a.hours).slice(-2),
                    0 == a.minutes ? e.classList.add("bounce-number") : e.classList.remove("bounce-number")
                }
                ),
                n.forEach(e => {
                    e.innerHTML = ("0" + a.minutes).slice(-2),
                    0 == a.seconds ? e.classList.add("bounce-number") : e.classList.remove("bounce-number")
                }
                ),
                r.forEach(e => {
                    e.innerHTML = ("0" + a.seconds).slice(-2),
                    e.classList.add("bounce-number")
                }
                )
        }
        i();
        var l = setInterval(i, 1e3)
    }("countdown", "December 7 2019 00:00:00 GMT+0200")
}, !1);

/* Nav - hide when scroll down and reappear when scroll up */
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


/* FAQ section - click & collapse the FAQ's */
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

 // Check for URL parameter and scroll to the specific section
 window.onload = function() {
    // Get the URL query parameters
    var params = new URLSearchParams(window.location.search);
    
    // Check if the 'scrollTo' parameter exists
    if (params.has('scrollTo')) {
        var sectionId = params.get('scrollTo');
        
        // Call the scrollToElement function with the value from the parameter
        scrollToElement(sectionId);
    }
};

/* Mobile Hamburger Menu */
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    navMenu.classList.toggle('open');
});


/* Scroll To Element function with id as parameter */
function scrollToElement(id) {
    const element = document.getElementById(id);  // Get the element by its ID
    console.log(element);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'start'     // Center the element vertically in the viewport
        });
    } else {
        console.warn(`Element with ID '${id}' not found.`);
    }
}

function redirectToIndex(element) {
    // Redirect to index.html with a query parameter
    window.location.href = "index.html#"+element;
}

