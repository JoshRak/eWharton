let count = 0;

function closeAlert() {
    document.getElementById("alert-box").style.display = "none";
}

function fade(element, interval) {
    var op = 1;
    var timer = setInterval(function() {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, interval);
}

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

function renderTour(load, next) {


    var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    if (current[next]) {
        current = current[next];
    }

    if (count > 0) {
        document.getElementById("alert-box").style.display = "none";
    }
    count = 1;

    console.log(current);
    if (load) {
        document.getElementById("main-label").style.display = "inline";
        document.getElementById("main-label").style.opacity = "1";
        document.getElementById("main-label").innerHTML = current.label;
        document.getElementById("tour-box").style.backgroundImage = current.image;
        // console.log(current.image);
        document.getElementById("tour-box").style.backgroundImage = current.image;

        document.getElementById("main-label").style.top = "25%";

        document.getElementById("tour-box").style.opacity = "0";

        fadeIn(document.getElementById("tour-box"), 25);
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

    // fade(document.getElementById("main-label"), 1000);
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
classroomTwo = new TourScreen();

bus = new TourScreen();
dormOne = new TourScreen();
dormTwo = new TourScreen();
dormHallWay = new TourScreen();
dormEntrance = new TourScreen();
spawn = new TourScreen();
busIn = new TourScreen();
bakerForum = new TourScreen();
staircase = new TourScreen();
koo = new TourScreen();


bakerForum.setVals(staircase, spawn, classroomTwo, classroomOne, "Baker Forum", "", "url('/assets/img/bakerForum.png')");
staircase.setVals(bakerForum, koo, "", "", "Staircase", "", "url('/assets/img/staircase.png')");
classroomOne.setVals("", "", bakerForum, "", "Classroom One", "", "url('/assets/img/classroom1.png')");
classroomTwo.setVals("", "", "", bakerForum, "Classroom Two", "", "url('/assets/img/classroom2.png')");
koo.setVals("", staircase, "", "", "Koo Plaza", "", "url('/assets/img/koo.png')")

spawn.setVals(bakerForum, "", bus, "", "Main Entrance", "", "url('/assets/img/mainEntrance.png')")
bus.setVals(busIn, "", "", spawn, "Complex Center", "", "url('/assets/img/complexCenter.png')");

busIn.setVals(dormEntrance, bus, "", "", "Campus Shuttle", "", "url('/assets/img/busIn.png')");

dormEntrance.setVals(dormHallWay, busIn, "", "", "Dorm Entrance", "", "url('/assets/img/dormEntrance.png')");
dormHallWay.setVals("", dormEntrance, dormTwo, dormOne, "Dorm Hallway", "", "url('/assets/img/dormHallway.png')");
dormOne.setVals("", "", dormHallWay, "", "Dorm One", "", "url('/assets/img/dorms1.png')");
dormTwo.setVals("", "", "", dormHallWay, "Dorm Two", "", "url('/assets/img/dorm2.png')");

let current = spawn;

window.onload = function() { renderTour(true, ""); };
window.onresize = function() { renderTour(false, ""); };

document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        if (document.getElementById("top-box").style.display != "none") {
            renderTour(true, "top")
        }
    }
    if (event.key === "ArrowRight") {
        if (document.getElementById("right-box").style.display != "none") {
            renderTour(true, "right")
        }
    }
    if (event.key === "ArrowDown") {
        if (document.getElementById("bottom-box").style.display != "none") {
            renderTour(true, "bottom")
        }
    }

    if (event.key === "ArrowLeft") {
        if (document.getElementById("left-box").style.display != "none") {
            renderTour(true, "left")

        }
    }
});