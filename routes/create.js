var data = require("../data.json");

exports.view = function(req, res) {
	// Your code goes here
    console.log("create just ran!");
    res.render('create');
}

var array1 = [];
var pName;
var topic;
var quest;
var hypo;
var url;

exports.func1 = function(a, b, c, d, e) {

    pName = a;
    topic = b;
    ques = c;
    hypo = d;
    url = e;
};

function getProjectName() {
    return pName;
}

function getTopicName() {
    return topic;
}

function getQuestion() {
    return ques;
}

function getHypo() {
    return hypo;
}

function getUrl() {
    return url;
}
