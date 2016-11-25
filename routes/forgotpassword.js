var data = require("../data.json");

exports.view = function(req, res) {
	// Your code goes here
    console.log("forgot password just ran!");
    res.render('forgotpassword');
}
