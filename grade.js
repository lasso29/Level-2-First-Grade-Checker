var song1 = new Audio ('music/failure-to-success-motivation-157585.mp3')
var song2 = new Audio ('music/failure-inpiration-159192.mp3')
var song3 = new Audio ('music/')
var song4 = new Audio ('music/mixkit-small-group-cheer-and-applause-518.wav')
function checkScore(){
    if (userScore.value == ''){
        displayResult.innerHTML = "Kindly Input your score"
        displayResult.style.color = 'red'
        displayResult.style.textAlign = 'center'
        displayResult.style.fontSize = '17px'
    }
    else if (userScore.value < 0){
        displayResult.style.color = 'red'
        displayResult.innerHTML = 'Kindly Input a value between 0 & 100'
         displayResult.style.textAlign = 'center'
        displayResult.style.fontSize = '17px'
    }
    else if (userScore.value >= 0 && userScore.value < 40){
        displayResult.style.color = 'red'
        displayResult.style.textAlign = 'center'
        displayResult.style.fontSize = '17px'
        displayResult.innerHTML = 'F - Fail'
        song1.play()
    }
    else if (userScore.value >= 40 && userScore.value < 45){
        displayResult.style.color = 'red'
        displayResult.style.textAlign = 'center'
        displayResult.style.fontSize = '17px'
        displayResult.innerHTML = 'E - Pass'
        song2.play()
    }
    else if (userScore.value >= 45 && userScore.value < 50){
        displayResult.style.color = 'brown'
        displayResult.style.textAlign = 'center'
        displayResult.style.fontSize = '17px'
        displayResult.innerHTML = 'D - Fair'
    }
    else if (userScore.value >= 50 && userScore.value < 60){
        displayResult.style.color = 'blue'
        displayResult.style.textAlign = 'center'
        displayResult.style.fontSize = '17px'
        displayResult.innerHTML = 'C - Average'
    }
    else if (userScore.value >= 60 && userScore.value < 70){
        displayResult.style.color = 'blue'
        displayResult.style.textAlign = 'center'
        displayResult.style.fontSize = '25px'
        displayResult.innerHTML = 'B - Good'
    }
    else if (userScore.value >= 70 && userScore.value <= 100){
        displayResult.style.color = 'Green'
        displayResult.style.textAlign = 'center'
        displayResult.style.fontSize = '17px'
        displayResult.innerHTML = 'A - Excellent🤗'
        song4.play()
    } else if (userScore.value > 100){
        displayResult.style.color = 'red'
        displayResult.innerHTML = 'Kindly Input a value between 0 & 100'
         displayResult.style.textAlign = 'center'
        displayResult.style.fontSize = '17px'
        
    } 
        

    
}