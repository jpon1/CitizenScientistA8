var data = require("../data.json");

exports.view = function(req, res) {
	// Your code goes here
    console.log("signup just ran!");
    res.render('signup');
}
