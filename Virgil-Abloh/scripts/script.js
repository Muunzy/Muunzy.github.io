let span = document.getElementById("span");
let fenster1 = document.getElementById("fenster1");
let button1 = document.getElementById("button1");


function time() {
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    span.textContent =
        ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);

button1.addEventListener("click", function (e) {
    fenster1.style.display = "none";
    console.log("fehler");

});