setInterval(setClock, 1000)

const hourHand = document.querySelector("[data-hour-hand]")
const minuteHand = document.querySelector("[data-minute-hand]")
const secondHand = document.querySelector("[data-second-hand]")
const button  = document.getElementById("random-btn")
const clockPart = document.getElementById("clock")
const bodyPart = document.getElementById("body")
let count = 0

function setClock() {
    const date = new Date()
    const second = date.getSeconds() / 60
    const minute = (second + date.getMinutes()) / 60
    const hour = (minute + date.getHours()) / 12
    setRotation(secondHand, second)
    setRotation(minuteHand, minute)
    setRotation(hourHand, hour)
}
function setRotation( hand, rotationValue) {
    hand.style.setProperty("--rotation", rotationValue*360)
}

button.addEventListener ("click", function() {
    count++;
    if(count % 2 != 0) {
        clockPart.style.background = "linear-gradient(to right, #2ebf91, #8360c3)"
        bodyPart.style.background = "#cbe9e4"
    }
    else {
        clockPart.style.background = "rgba(255, 255, 255, 0.6)"
        bodyPart.style.background= "linear-gradient(to right, #2ebf91, #8360c3)"
    }
})

setClock()
