// SECTION TWO
var et = document.getElementById('education-container');
et.addEventListener('mouseover', function() {
    var et = document.getElementById('Coursework');
    et.style.opacity = '1';
    et.classList.add("Coursework-active")
    var et = document.getElementById('Education-University');
    et.style.opacity = '1';
    et.classList.add("Education-University-active")
    var et = document.getElementById('edu-logo');
    et.style.opacity = '1';
    et.classList.add("edu-logo-active"); 
});
et.addEventListener('mouseout', function() {
    var et = document.getElementById('Coursework');
    et.style.opacity = '0.3';
    // et.classList.remove("Coursework-active")
    var et = document.getElementById('Education-University');
    et.style.opacity = '0.3';
    // et.classList.remove("Education-University-active")
    var et = document.getElementById('edu-logo');
    et.style.opacity = '0.3';
    // et.classList.remove("edu-logo-active"); 
});

//SECTION THREE
var et = document.getElementById('work-container');
et.addEventListener('mouseover', function() {
    var et = document.getElementById('app');
    et.style.opacity = '1';
    et.classList.add("app-active")
    var et = document.getElementById('scholastic');
    et.style.opacity = '1';
    et.classList.add("scholastic-active")
    var et = document.getElementById('work-logo');
    et.style.opacity = '1';
    et.classList.add("work-logo-active"); 
});
et.addEventListener('mouseout', function() {
    var et = document.getElementById('app');
    et.style.opacity = '0.3';
    // et.classList.remove("app-active")
    var et = document.getElementById('scholastic');
    et.style.opacity = '0.3';
    // et.classList.remove("scholastic-active")
    var et = document.getElementById('work-logo');
    et.style.opacity = '0.3';
    // et.classList.remove("work-logo-active"); 
});

// SECTION FOUR
var et = document.getElementById('skills-container');
et.addEventListener('mouseover', function() {
    var et = document.getElementById('pl');
    et.classList.add("pl-active")
    var et = document.getElementById('ts');
    et.classList.add("ts-active")
    var et = document.getElementById('skills-logo');
    et.classList.add("skills-logo-active"); 
});
// et.addEventListener('mouseout', function() {
//     pl.classList.remove("pl-active");
//     ts.classList.remove("ts-active");
//     var et = document.getElementById('skills-logo');
//     et.classList.remove("skills-logo-active"); 
// });
var skillsContainer = document.getElementById('skills-container');
skillsContainer.addEventListener('mouseover', function() {
    // skillsContainer.style.opacity = '1';
    var et = document.getElementById('skills-logo');
    et.style.opacity = '1';
    var et = document.getElementById('pl');
    et.style.opacity = '1';
    var et = document.getElementById('ts');
    et.style.opacity = '1';  
});

skillsContainer.addEventListener('mouseout', function() {
    // skillsContainer.style.opacity = '0.3';
    var et = document.getElementById('skills-logo');
    et.style.opacity = '0.3';
    var et = document.getElementById('pl');
    et.style.opacity = '0.3';  
    var et = document.getElementById('ts');
    et.style.opacity = '0.3';
});

// SECTION 5


var et = document.getElementById('connect-container');
et.addEventListener('mouseover', function() {
    var et = document.getElementById('connect');
    et.classList.add("connect-active")
    var et = document.getElementById('connect-logo');
    et.classList.add("connect-logo-active"); 
});
var cContainer = document.getElementById('connect-container');
cContainer.addEventListener('mouseover', function() {
    var et = document.getElementById('connect-logo');
    et.style.opacity = '1';
    var et = document.getElementById('connect');
    et.style.opacity = '1'; 
});

cContainer.addEventListener('mouseout', function() {
    var et = document.getElementById('connect-logo');
    et.style.opacity = '0.3';
    // et.classList.remove("app-active")
    var et = document.getElementById('connect');
    et.style.opacity = '0.3'; 
});

document.addEventListener('DOMContentLoaded', function () {
    var dots = document.querySelectorAll('.loaders.two .dots');
    dots.forEach(function (dots, index) {
        dots.addEventListener('click', function () {
            var containerId = "";
            switch (index) {
                case 0:
                    containerId = 'title-container';
                    break;
                case 1:
                    containerId = 'education-container';
                    break;
                case 2:
                    containerId = 'work-container';
                    break;
                case 3:
                    containerId = 'skills-container';
                    break;
                case 4:
                    containerId = 'connect-container';
                    break;
            }
            var container = document.getElementById(containerId);
            container.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
