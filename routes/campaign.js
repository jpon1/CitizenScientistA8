
var data = require("../data.json");

exports.view = function(req, res) {
	// Your code goes here
    console.log("campaign just ran!");
    res.render('campaign');
}
