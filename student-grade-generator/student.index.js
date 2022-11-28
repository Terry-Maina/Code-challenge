//A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.

const studentScore = ""
function checkScore(studentScore){
    if (studentScore >= 79 && studentScore <=100){
    return "A"
    } else if (studentScore>=60 && studentScore <=79){
    return "B"
    } else if (studentScore >= 49 && studentScore <=59) {
        return "c"
    } else if (studentScore >= 40 && studentScore <=49) {
        return "D"
    } else if (studentScore <40){
        return "E"
    } else {
        return "Enter a valid Number"
    }
}
    //console.log (checkScore (80))

    function handleClick(event) {
        let marks = parseInt(document.getElementById("Marks").value)
        let grade = checkScore(marks)
        document.getElementById("Grade").textContent = grade
    }