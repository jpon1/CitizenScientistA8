var data = require("../data.json")

var array1 = [];
var pName;
var topic;
var quest;
var hypo;
var url;

function func1(a, b, c, d, e) {

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

function func2(email, pwd) {
    if (email == '' || pwd == '') {
        alert("Please fill all fields...!!!");
        window.location = "/signin";
    } else if (data.user[0].username == email && data.user[0].password == pwd) {
        window.location = "home.html";
    } else {
        alert("invalid username or password");
        window.location = "/signin";
    }
}