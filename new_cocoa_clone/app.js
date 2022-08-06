const status_time = document.querySelector("#time-display")

function numericDigitsOneToTwo(time) {
    return String(time).padStart(2,"0")
}

function displayTime() {
    const date = new Date()
    const timeNow = numericDigitsOneToTwo(date.getHours());
    const minuteNow = numericDigitsOneToTwo(date.getMinutes());
    
    status_time.innerText = `${timeNow}:${minuteNow}`

}
displayTime()
setInterval(displayTime,1000)