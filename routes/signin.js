var data = require("../data.json")['user'];

exports.view = function(req, res) {
	// Your code goes here
    console.log("signin just ran!");
    res.render('signin');
}

exports.func2 = function(email, pwd) {
    if (email == '' || pwd == '') {
        alert("Please fill all fields...!!!");
        window.location="signin.html";
    } else if (data.user[0].username == email && data.user[0].password == pwd) {
        window.location="home.html";
    } else {
        alert("invalid username or password");
        window.location="signin.html";
    }
}