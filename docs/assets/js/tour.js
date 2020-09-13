function closeAlert() {
    document.getElementById("alert-box").style.display = "none";
}

// function fade(element) {
//     var op = 1;
//     var timer = setInterval(function() {
//         if (op <= 0.1) {
//             clearInterval(timer);
//             element.style.display = 'none';
//         }
//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op -= op * 0.1;
//     }, 50);
// }

function renderTour(load, next) {
    var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    if (current[next]) {
        current = current[next];
    }

    console.log(current);
    if (load) {
        document.getElementById("main-label").style.display = "inline";
        document.getElementById("main-label").style.opacity = "1";
        document.getElementById("main-label").innerHTML = current.label;
        document.getElementById("tour-box").style.backgroundImage = current.image;
        // console.log(current.image);
        document.getElementById("tour-box").style.backgroundImage = current.image;
    }

    document.getElementById("tour-box").style.height = vh - document.getElementsByClassName("nav")[0].offsetHeight + "px";

    if (current["top"]) {
        document.getElementById("top-text").innerHTML = current.top.label;
        document.getElementById("top-box").style.display = "inline";
        document.getElementById("top-box").style.left = .50 * vw - (document.getElementById("top-box").offsetWidth / 2.0) + "px";
        document.getElementById("top-box").style.top = "20px";

    } else {
        document.getElementById("top-box").style.display = "none";
    }

    if (current["bottom"]) {
        document.getElementById("bottom-text").innerHTML = current.bottom.label;
        document.getElementById("bottom-box").style.display = "inline";
        document.getElementById("bottom-box").style.left = .50 * vw - (document.getElementById("bottom-box").offsetWidth / 2.0) + "px";
        document.getElementById("bottom-box").style.bottom = "20px";
    } else {
        document.getElementById("bottom-box").style.display = "none";
    }

    if (current["right"]) {
        document.getElementById("right-text").innerHTML = current.right.label;
        document.getElementById("right-box").style.display = "inline";
        document.getElementById("right-box").style.top = .50 * document.getElementById("tour-box").offsetHeight - (document.getElementById("right-box").offsetHeight / 2.0) + "px";
        document.getElementById("right-box").style.right = "20px";
    } else {
        document.getElementById("right-box").style.display = "none";
    }

    if (current["left"]) {
        document.getElementById("left-text").innerHTML = current.left.label;
        document.getElementById("left-box").style.display = "inline";
        document.getElementById("left-box").style.top = .50 * document.getElementById("tour-box").offsetHeight - (document.getElementById("left-box").offsetHeight / 2.0) + "px";
        document.getElementById("left-box").style.left = "20px";
    } else {
        document.getElementById("left-box").style.display = "none";
    }

    // document.getElementById("main-label").style.left = .50 * vw - (document.getElementById("main-label").offsetWidth / 2.0) + "px";
    document.getElementById("main-label").style.top = "25%";

    // setTimeout(function() {
    //     fade(document.getElementById("main-label"));
    // }, 5000)
}

class TourScreen {
    constructor() {}
    setVals(top, bottom, right, left, label, desc, image) {
        this.top = top;
        this.bottom = bottom;
        this.right = right;
        this.left = left;
        this.label = label;
        this.desc = desc;
        this.image = image;
    }
}

classroomOne = new TourScreen();
hallwayOne = new TourScreen();

classroomOne.setVals(hallwayOne, hallwayOne, hallwayOne, hallwayOne, "Classroom One", "", "url('/assets/img/classroom1.png')");
hallwayOne.setVals("", classroomOne, "", "", "Hallway One", "", "url('/assets/img/hallway1.png')");

let current = classroomOne;

window.onload = function() { renderTour(true, ""); };
window.onresize = function() { renderTour(false, ""); };