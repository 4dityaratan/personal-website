var element1 = document.querySelector('#hireme')
element1.addEventListener('mouseover', function() {
    element1.classList.add('animated', 'jello')
    setTimeout(function() {
        element1.classList.remove('animated', 'jello')
    }, 500)
})

var element2 = document.getElementById('resume')
element2.addEventListener('mouseover', function() {
    element2.classList.add('animated', 'jello')
    setTimeout(function() {
        element2.classList.remove('animated', 'jello')
    }, 500)
})

// back to top

var mybutton = document.getElementById("myBtn");


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}