// Open the Modal
function openModal(num) {
    console.log(num);
    if (num == 1) { // music festival
        console.log("music");
        document.getElementsByClassName("slide1")[0].src = "/assets/img/robloxKooPlaza2_2.png";
        document.getElementsByClassName("slide2")[0].src = "/assets/img/irlKooPlaza2_2.jpg";
        document.getElementsByClassName("slide3")[0].src = "/assets/img/robloxKooPlaza1_2.png";
        document.getElementsByClassName("slide4")[0].src = "/assets/img/irlKooPlaza1_2.jpg";
    } else if (num == 2) { // dorms
        document.getElementsByClassName("slide1")[0].src = "/assets/img/robloxInterior1_2.png";
        document.getElementsByClassName("slide2")[0].src = "/assets/img/irlDorms1_2.jpg";
        document.getElementsByClassName("slide3")[0].src = "/assets/img/robloxInterior2_2.png";
        document.getElementsByClassName("slide4")[0].src = "/assets/img/irlDorms2_2.jpg";
    } else if (num == 3) { // education
        document.getElementsByClassName("slide1")[0].src = "/assets/img/modaledu3.png";
        document.getElementsByClassName("slide2")[0].src = "/assets/img/modaledu2.jpg";
        document.getElementsByClassName("slide3")[0].src = "/assets/img/modaledu4.png";
        document.getElementsByClassName("slide4")[0].src = "/assets/img/modaledu1.jpg";
    } else if (num == 4) { // exterior
        document.getElementsByClassName("slide1")[0].src = "/assets/img/robloxExterior2_2.png";
        document.getElementsByClassName("slide2")[0].src = "/assets/img/irlExterior1_2.png";
        document.getElementsByClassName("slide3")[0].src = "/assets/img/robloxExterior1_2.png";
        document.getElementsByClassName("slide4")[0].src = "/assets/img/irlExterior2_2.png";
    } else if (num == 5) { // tour guides
        document.getElementsByClassName("slide1")[0].src = "/assets/img/robloxNPC1_2.png";
        document.getElementsByClassName("slide2")[0].src = "/assets/img/robloxNPC2_2.png";
        document.getElementsByClassName("slide3")[0].src = "/assets/img/robloxNPC3_2.png";
        document.getElementsByClassName("slide4")[0].src = "/assets/img/robloxNPC2_2.png";
    }
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n, num) {

    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
    // captionText.innerHTML = dots[slideIndex - 1].alt;
}


document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        document.getElementById("myModal").style.display = "none";
    }
    if (event.key === "ArrowRight") {
        if (document.getElementById("myModal").style.display == "block") {
            plusSlides(1);
        }
    }
    if (event.key === "ArrowLeft") {
        if (document.getElementById("myModal").style.display == "block") {
            plusSlides(-1);
        }
    }
});