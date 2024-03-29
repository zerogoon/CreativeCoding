const body = document.body,
    jsScroll = document.getElementsByClassName("js-scroll")[0],
    height = jsScroll.getBoundingClientRect().height - 1,
    speed = 0.05;

let offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;

    const scroll = "translateY(-" + offset + "px) translateZ(0)";
    jsScroll.style.transform = scroll;

    raf = requestAnimationFrame(smoothScroll);
}
smoothScroll();
