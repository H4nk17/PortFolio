var boutonHtml = document.getElementById('html');
var boutonJs = document.getElementById('javascript');
var boutonPhp = document.getElementById('php');



var sectionHtml = document.getElementById('htmlsection');
var sectionJs = document.getElementById('jssection');
var sectionPhp = document.getElementById('phpsection');



function displayNone() {
    sectionJs.style.display = "none";
    sectionPhp.style.display = "none";
    sectionHtml.style.display = "block";
};


boutonHtml.addEventListener('click', displayNone);


function displayNone2() {
    sectionHtml.style.display = "none";
    sectionPhp.style.display = "none";
    sectionJs.style.display = "block";
};


boutonJs.addEventListener('click', displayNone2);


function displayNone3() {
    sectionHtml.style.display = "none";
    sectionJs.style.display = "none";
    sectionPhp.style.display = "block";
};


boutonPhp.addEventListener('click', displayNone3);