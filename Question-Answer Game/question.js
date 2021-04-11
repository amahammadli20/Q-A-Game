var questionPool = {
    q1: ["Definition of RGB is Red, Green and Blue?", true],
    q2: ["A byte consistes of 8 bits?", true],
    q3: ["There is no way having zeros and ones at the same time?", false],
    q4: ["JSON is an object that can include any types of data in itself?", true],
    q5: ["JSON and Arrays, both work with indexes", false],
}

var score = 0;
var currentQuestion = 0;
var questions = Object.values(questionPool); //here we got 2dimensional array

//waiting for response
//istifadeci klavisle cavab verir, duymeye basdigi ani tutmaq ucun event yaradiriq.

window.onkeypress = function(event){
    question = questions[currentQuestion];
    var playerResponse = event.key; //basilan cavab e.key daxilindedir
    playerResponse = playerResponse.toLowerCase();

    //eger basqa simvol elave edilibse, tf stringinde t-nin index-i 0, f-in 1-dir. index-in menfi bire beraber olmasi, hemin stringde tapmadigini gosterir.
    if("tf".indexOf(playerResponse) === -1){
        alert("Attention pls: only t or f characters are accepted");
        return; //bu if-in icerisine girdise, daha digerlerini davam etmesin deye, return qoymasaydiq, asagidaki if-ler de run olunardi.
    }

   
    //beraberlik ve ya sehv hallarini qeyd etmirik, cunki elede olsa zaten score deyisilmeyecek.
    if((playerResponse == "t" && question[1] == true) || (playerResponse == "f" && question[1] == false)){
        score++;
    } 
    showResult(); //score-u artirdiqdan sonra yeni neticeni goster
    if(currentQuestion < questions.length-1){
        currentQuestion++;
    } else{
        resetGame();
    }
    
    askQuestion(); //yeniden suali sorusmaq ucun
}

function resetGame(){
    currentQuestion = 0;
    score = 0;
}

function showResult(){
    document.getElementById("score").innerText = "score " + score;
}

function askQuestion(){
    question = questions[currentQuestion] //here we got 1st array of 2dimensioanl array
    //id-si guess olan elementin daxili textine arrayin 0-ci elementi ile yeni sual hissesini doldururuq
    document.getElementById("guess").innerText = question[0];
}

askQuestion();

//S T E P S:
//1. ask 0th question and wait for response
//2. store the response of question and compare if it's tru or not
//3. Based on comparison, score++ or cont
//4. update scores and show results
//5. ask next question