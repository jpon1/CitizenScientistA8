var data = require("../data.json");

exports.view = function(req, res) {
	// Your code goes here
    console.log("environment just ran!");
    res.render('environment');
}
