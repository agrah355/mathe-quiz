var user1=document.getElementById("user1_name").value;
var user2=document.getElementById("user1_name").value;

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