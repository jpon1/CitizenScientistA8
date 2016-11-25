var data = require("../data.json");

exports.view = function(req, res) {
	// Your code goes here
    console.log("signin just ran!");
    res.render('signin');
}
