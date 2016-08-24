var str = '';

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
    }
})();
var splitted = response.split("\n", 1000);
for (var i = 0; i < splitted.length; i++) {
    var spl = splitted[i].split("=", 1000);
    if (spl[0] == "TaskPicture") {
        str = spl[1];
    }
}

var width = 7;
var height = 5;

var bw = width * 50;
var bh = height * 50;
var padding = 4;
var j = 0;

//var cw = bw + (padding*2) + 1;
//var ch = bh + (padding*2) + 1;

var x = padding;
var y = padding;

var canvas1 = document.getElementById("canvas1");
var context1 = canvas1.getContext("2d");
var context2 = canvas1.getContext("2d");
var canvas2 = document.getElementById("canvas2");
var context3 = canvas2.getContext("2d");
var context4 = canvas2.getContext("2d");

function drawBoard(context) {
    for (var i = 0; i <= bw; i += 50) {
        context.moveTo(0.5 + i + padding, padding);
        context.lineTo(0.5 + i + padding, bh + padding);
    }
    for (var i = 0; i <= bh; i += 50) {
        context.moveTo(padding, 0.5 + i + padding);
        context.lineTo(bw + padding, 0.5 + i + padding);
    }
    context.strokeStyle = "#CBDBE1";
    context.stroke();
}

function par(s) {
    for (var i = 0; i < s.length; i++) {
        if (isNaN(s[i]) == false) {
            for (j = 0; j < s[i]; j++) {
                move(s[i + 1]);
            }

            i += 1;
        }
        else {
            move(s[i]);
        }

    }

}

function move(str) {
    context2.moveTo(x, y);
    context4.moveTo(x, y);
    if (str == "R") {
        x += 50;
    }
    else if (str == "D") {
        y += 50;
    }
    else if (str == "L") {
        x -= 50;
    }
    else if (str == "U") {
        y -= 50;
    }
    context2.lineTo(x, y);
    context2.stroke();
    context4.lineTo(x, y);
    context4.stroke();

}

drawBoard(context1);
drawBoard(context3);

par(str);




