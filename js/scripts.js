/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

});

const form = document.getElementById('generate-training-plan');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let select = document.getElementById('distance');
    const distance = select.options[select.selectedIndex].value;

    select = document.getElementById('duration');
    const duration = select.options[select.selectedIndex].value;

    select = document.getElementById('rest-days');
    const restDays = select.options[select.selectedIndex].value;

    // construct the URL of the PDF file to download
    const pdfUrl = `assets/pdf/${distance}km_${duration}weeks_${restDays}rest.pdf`;

    // create a hidden anchor element with the download attribute
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = 'your-training-plan';

    // simulate a click on the download link
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    const access = document.getElementById("signup");
    access.scrollIntoView({behavior: 'smooth'}, true);

    const downloadedPlan = document.getElementById("downloaded-plan");
    downloadedPlan.classList.remove('invisible')
});
