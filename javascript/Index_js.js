var vid = document.getElementById("vid");
vid.playbackRate = 0.5;

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

var index = 0;
slideshow();

function slideshow() {
    var i;
    var x = document.getElementsByClassName("slides");
    var y = document.getElementsByClassName("slide-text")
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
    index++;
    if (index > x.length) {index=1}
    x[index-1].style.display ="block";
    y[index-1].style.display ="block";
    setTimeout(slideshow,4000);
}