var s = '';

function getXmlHttp() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}
var response = undefined;
(function () {
    var xmlhttp = getXmlHttp();
    xmlhttp.open('GET', 'task.ini', false);
    xmlhttp.send(null);
    if (xmlhttp.status == 200) {
        response = xmlhttp.responseText;
        alert(response);
    }
})();
var splitted = response.split("\n", 1000);
console.log(splitted);

for(var i = 0; i < splitted.length; i++){
    var spl = splitted[i].split("=", 1000);
    if (spl[0]=="TaskPicture"){
        s = spl[1];
        console.log(s);
    }
}

var bw = 200;
var bh = 200;
var padding = 4;
//var cw = bw + (padding*2) + 1;
//var ch = bh + (padding*2) + 1;

var a = padding;
var b = padding;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function drawBoard() {
    for (var x = 0; x <= bw; x += 50) {
        context.moveTo(0.5 + x + padding, padding);
        context.lineTo(0.5 + x + padding, bh + padding);
    }
    for (var x = 0; x <= bh; x += 50) {
        context.moveTo(padding, 0.5 + x + padding);
        context.lineTo(bw + padding, 0.5 + x + padding);
    }
    context.strokeStyle = "#CBDBE1";
    context.stroke();
}

function par(s) {
    for (var i = 0; i < s.length; i++) {
        move(s[i]);
    }
}

function move(str) {
    context.moveTo(a, b);
    if (str == "R") {
        a += 50;
    }
    else if (str == "D") {
        b += 50;
    }
    else if (str == "L") {
        a -= 50;
    }
    else if (str == "U") {
        b -= 50;
    }
    context.lineTo(a, b);
    context.stroke();

}

drawBoard();

par(s);