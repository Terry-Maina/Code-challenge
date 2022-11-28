function checkSpeedCar(speedCar){

if (speedCar <=70){
    return "OK"

}else if (speedCar <= 130){
    return Math.floor((speedCar-70)/5) + " demerit points"

}else if(speedCar > 130){
    return "Lincense suspended"
}
}
//console.log(checkSpeedCar(95))

function handleClick(event) {
    let speed = parseInt(document.getElementById ("Speed").value)
    let message = checkSpeedCar(speed)
    document.getElementById("message").textContent = message
}