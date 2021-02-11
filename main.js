var user1;
var user2;
function logIn(){
    user1=document.getElementById("user1_name").value;
    user2=document.getElementById("user2_name").value;
    localStorage.setItem("user 1 name",user1);
    localStorage.setItem("user 2 name",user2);
    window.location="2index.html";
} 