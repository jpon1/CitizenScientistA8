var data = require("../data.json");

exports.view = function(req, res) {
	// Your code goes here
    console.log("home just ran!");
    res.render('home');
}

exports.viewSlides = function (req, res) {
    // Your code goes here
    console.log("slides just ran!");
    res.render('home2');
}