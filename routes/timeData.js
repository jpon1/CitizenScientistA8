var data = require("../data.json");

exports.view = function(req, res) {
	// Your code goes here
    console.log("timeData just ran!");
    res.render('timeData');
}
