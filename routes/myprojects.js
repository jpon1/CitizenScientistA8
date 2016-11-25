var data = require("../data.json");

exports.view = function(req, res) {
	// Your code goes here
    console.log("my projects just ran!");
    res.render('myprojects');
}
