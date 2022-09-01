const track = document.querySelector(".track");
const circle = document.querySelector(".circle");
const value = document.querySelector(".value");
const slider = document.querySelector(".slider");

function mouseDown(e) {
    document.addEventListener("mousemove", mouseMove);
    track.style.backgroundColor = "#1b994b";
    circle.style.backgroundColor = "#1b994b";
    value.style.color = "#1b994b";
    x = e.clientX;
}

function mouseMove(e) {
    max = slider.clientWidth;
    track.style.width =
        Math.min(track.clientWidth + (e.clientX - x), max) + "px";
    value.innerText = Math.max(
        Math.ceil(
            (Math.min(track.clientWidth + (e.clientX - x), max) / max) * 100
        ),
        0
    );
    x = e.clientX;
}

function mouseUp() {
    document.removeEventListener("mousemove", mouseMove);
    track.style.backgroundColor = "#51cf81";
    circle.style.backgroundColor = "#0fa425";
    value.style.color = "#1b994b";
}

circle.addEventListener("mousedown", mouseDown);
document.addEventListener("mouseup", mouseUp);
document.addEventListener("wheel", wheel);