var data = require("../data.json");

exports.view = function(req, res) {
	// Your code goes here
    console.log("science just ran!");
    res.render('science');
}
