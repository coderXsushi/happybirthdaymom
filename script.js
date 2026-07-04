function openLetter() {

    document.querySelector(".envelope").style.display = "none";

    document.getElementById("letter").classList.add("show");

    document.getElementById("galleryButton").style.display = "inline-block";

    confetti({
    particleCount: 100,
    angle: 60,
    spread: 70,
    origin: { x: 0 }
});

confetti({
    particleCount: 100,
    angle: 120,
    spread: 70,
    origin: { x: 1 }
});
}
function showGallery() {
    document.getElementById("gallery").style.display = "block";
}