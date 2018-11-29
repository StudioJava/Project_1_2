// JavaScript Document
window.onscroll = function() {scrollColorChange()};

function scrollColorChange() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myP").className = "orange";
    } else {
        document.getElementById("myP").className = "text-white";
    }
}