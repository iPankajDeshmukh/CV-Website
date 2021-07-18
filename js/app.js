  // image filter 

    var $wrapper = $('.gallery');
    // Initialize isotope 
    $wrapper.isotope({
        filter : '*',
        layoutMode : 'masonry',
        animationOptions : {
            duration: 750,
            easing: 'linear'
        }
    });

    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {

        let selector = link.dataset.filter;
        link.addEventListener('click', function(e) {
            e.preventDefault();

            $wrapper.isotope({
                filter : selector,
                layoutMode : 'masonry',
                animationOptions : {
                    duration: 750,
                    easing: 'linear'
                }
            });

            links.forEach(link =>{
                link.classList.remove('active');
            })

            e.target.classList.add('active');

        });
    })

    // Magnify pop up 
    console.log($('.magnific').magnificPopup)
    $('.magnific').magnificPopup({
        type: 'image',
        gallery: {
            enabled : true
        },
        zoom : {
            enable: true
        }
    });

    // Slider

    $('.slider').slick({
        arrows: false,
        autoplay: true
    });


// ===================form submit===============================================

window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HRML

var form = document.getElementById("contact-form");
var status = document.getElementById("status");

// sucess and error functions after the form is submitted

function success() {
    form.reset();
    status.classList.add('success');
    status.innerHTML = "I recieved your message! Will get back to you shortly.";
}

function error() {
    status.classList.add('error');
    status.innerHTML = "Oops! Something went wrong.."
}

// handle the form submission event 

form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
});

});

// helperfunction fpr sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else { 
        error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);

}