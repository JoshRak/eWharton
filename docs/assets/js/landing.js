let count = 0;

function fadeIn(element, interval) {
    var op = 0.1;
    console.log(op);
    var timer = setInterval(function() {
        if (op >= 0.9) {
            clearInterval(timer);
            element.style.opacity = 1;
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + (op * 100) + ")";
        op += op * 0.1;
    }, interval);
}

function renderVideo() {

    document.getElementById("main-container").style.opacity = 0;

    let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    document.getElementById("landing-video").style.left = Math.min(vw - 1920, 0) + "px";
    document.getElementById("landing-video").style.top = document.getElementById("globalNavBar").offsetHeight + "px";
    document.getElementById("main-container").style.left = .50 * vw - (document.getElementById("main-container").offsetWidth / 2.0) + "px";

    setTimeout(function() {
            fadeIn(document.getElementById("main-container"), 50);
        }, 500)
        // fadeIn(document.getElementById("main-container"), 50);
    count += 1;
}

window.onload = function() { renderVideo(); };
window.onresize = function() { renderVideo(); };