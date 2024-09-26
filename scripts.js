const form = document.querySelector(".formulario-faleconosco")
const mascara = document.querySelector(".mascara-formulario")



function cliqueinobotao() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}

function cliquenamascara() {
    mascara.style.visibility = "hidden"
    form.style.transform = "translatex(100vw)"
}






let time = 1500,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
max = images.length;




function nextImage() {

    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)





const textAnimation = document.querySelector('#text-animation')
const text = 'TEC-WOLRD Cursos profissionalizantes';
const interval = 80;

function showTexte(textAnimation, text, interval) {

    const char = text.split('').reverse();

    const typer = setInterval(() => {

        if (!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop();

        textAnimation.innerHTML += next;

    }, interval);
}

showTexte(textAnimation, text, interval);