let span = document.getElementById("span");
let fenster1 = document.getElementById("fenster1");
let button1 = document.getElementById("button1");
let fenster2 = document.getElementById("fenster2");
let button2 = document.getElementById("button2");
let fenster3 = document.getElementById("fenster3");
let button3 = document.getElementById("button3");
let fenster4 = document.getElementById("fenster4");
let button4 = document.getElementById("button4");


function time() {
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    span.textContent =
        ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);

button1.addEventListener('click', () => {
    fenster1.style.display = "none";
});

button2.addEventListener('click', () => {
    fenster2.style.display = "none";
});
button3.addEventListener('click', () => {
    fenster3.style.display = "none";
});
button4.addEventListener('click', () => {
    fenster4.style.display = "none";
});