function closeAlert() {
    document.getElementById("alert-box").style.display = "none";
}

function renderTour() {
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    document.getElementById("tour-box").style.backgroundImage = 'url("assets/img/RobloxScreenShot20200525_232021279 2.png")'
    document.getElementById("top-box").style.left = .50 * vw - (document.getElementById("top-box").offsetWidth / 2.0) + "px";
    document.getElementById("top-box").style.top = "20px";

    document.getElementById("top-box").style.left = .50 * vw - (document.getElementById("top-box").offsetWidth / 2.0) + "px";
    document.getElementById("top-box").style.bottom = "20px";

    document.getElementById("right-box").style.top = .50 * document.getElementById("tour-box").offsetHeight - (document.getElementById("right-box").offsetHeight / 2.0) + "px";
    document.getElementById("right-box").style.right = "20px";

    document.getElementById("left-box").style.top = .50 * document.getElementById("tour-box").offsetHeight - (document.getElementById("right-box").offsetHeight / 2.0) + "px";
    document.getElementById("left-box").style.left = "20px";
}

window.onload = function() { renderTour(); };
window.onresize = function() { renderTour(); };