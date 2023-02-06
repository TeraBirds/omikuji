let username;
let userresult;
username = prompt("Tell me your name.");
if (username == "") {username = "名無し"}
document.getElementById("name").innerHTML = username;
let rand = Math.floor( Math.random() * 10) ;

if (rand == 0,5,6,7,8,9) {userresult = "大吉";}
if (rand == 1) {userresult = "中吉";}
if (rand == 2) {userresult = "小吉";}
if (rand == 3) {userresult = "吉";}
if (rand == 4) {userresult = "凶";}

document.getElementById("result").innerHTML = userresult;

