



document.getElementById("btn").onclick = function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username == 'Seth' && password == '1234') {
        alert('Password correct access to main granted.');
        window.open("file:///D:/Sethscode/Game%20Design/Fish/nav.html");
    } else {
      alert("Password, Username or Country incorrect.");
    } 
    
}
document.getElementById("b").onclick = function() {
    window.open('forgot.html');
}