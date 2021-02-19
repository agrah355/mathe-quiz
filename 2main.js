var user1=document.getElementById("user1_name").value;
var user2=document.getElementById("user1_name").value;

var answer_turn;
var question_turn;

var score1=document.getElementById("player1_score").innerHTML="";
var score2=document.getElementById("player2_score").innerHTML="";

document.getElementById("player1_name").innerHTML=user1;
document.getElementById("player2_name").innerHTML=user2;

document.getElementById("player_question").innerHTML="Question : " + user1;
document.getElementById("player_answer").innerHTML="Answer : " + user2;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value; 
    actule_number=perseInt(number1) * perseInt(number2);

    question_lable="<h4>" + number1+ "X" + number2+"</h4>";
    answer_input="<br>Answer:<input type='text' id='input_check_box' placeholder='Answer'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_lable + answer_input + check_button;

    document.getElementById("output").innerHTML=row;

    document.getElementById("number1").value="";
    document.getElementById("number2").value=""; 
}

function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actule_number){
        if(answer_turn=="user1"){
            score1=score1+1;
            document.getElementById("player1_score").innerHTML=score1;
        }
        else{
            score2=score2+1;
            document.getElementById("player2_score").innerHTML=score2;
        }
    }
    if(question_turn=="user1"){
        question_turn="user2";
        document.getElementById("player_question").innerHTML="Question Turn: " +question_turn;
    }
    else{
        question_turn="user1";
        document.getElementById("player_question").innerHTML="Question Turn: " +question_turn;
    }
}