var data = require("../data.json");

exports.view = function(req, res) {
	// Your code goes here
    console.log("contribute just ran!");
    res.render('contribute');
}
