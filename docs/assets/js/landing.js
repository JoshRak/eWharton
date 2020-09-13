function renderVideo() {
    let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    document.getElementById("landing-video").style.left = Math.min(vw - 1920, 0) + "px";
    document.getElementById("landing-video").style.top = document.getElementById("globalNavBar").offsetHeight + "px";
    document.getElementById("main-container").style.left = .50 * vw - (document.getElementById("main-container").offsetWidth / 2.0) + "px";
}

window.onload = function() { renderVideo(); };
window.onresize = function() { renderVideo(); };