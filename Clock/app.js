const hour = document.querySelector(".hour")
const min = document.querySelector(".min")
const second = document.querySelector(".second")

function setDate() {
    const now = new Date();

    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    const currentsecond = now.getSeconds();

    const secondDegrees =currentsecond * 6 + 90;
    const minDegrees = currentMin * 6 + 90;
    const hourDegrees = ((currentHour / 12) * 360) + ((currentMin/60)*30) + 90;
    
    

    hour.style.transform = `rotate(${hourDegrees}deg)`;
    min.style.transform = `rotate(${minDegrees}deg)`;
    second.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(setDate, 1000);