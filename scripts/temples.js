var currentYear = new Date().getFullYear();

var copyrightParagraph = document.getElementById("copyright");
copyrightParagraph.innerHTML = + currentYear;

var lastModifiedParagraph = document.getElementById('lastModified');
var lastModifiedDate = document.lastModified;
lastModifiedParagraph.innerHTML = 'Last Modification: ' + lastModifiedDate;



var navBar = document.getElementById("navBar");

function showMenu(){
    navBar.style.right = "0";
}

function hideMenu(){
    navBar.style.right = "-200px";
}

