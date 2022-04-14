var search = document.querySelector("#axtar");
var inputa = document.querySelector("#search");
var two = document.querySelector("#header-two");


var closes = document.querySelector(".search-btn span");


search.addEventListener('click', function(e){
    inputa.classList.add("active");
    two.style.display = "none";

    e.preventDefault();
})
closes.addEventListener('click', function(e){
    inputa.classList.remove("active");
    two.style.display = "block";
    e.preventDefault();
})




var navbar = document.querySelector('.side-navbar');
var btn = document.querySelector('.tikla');

btn.addEventListener('click', function(e){
    navbar.classList.toggle('show');

    e.preventDefault();
})
