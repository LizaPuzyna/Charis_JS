var str = getParam("TaskPicture");

var width = 7;
var height = 5;
var n = 50;

var bw = width * n;
var bh = height * n;
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
    for (var i = 0; i <= bw; i += n) {
        context.moveTo(0.5 + i + padding, padding);
        context.lineTo(0.5 + i + padding, bh + padding);
    }
    for (var i = 0; i <= bh; i += n) {
        context.moveTo(padding, 0.5 + i + padding);
        context.lineTo(bw + padding, 0.5 + i + padding);
    }
    context.strokeStyle = "#CBDBE1";
    context.stroke();
}

function par(s) {
    for (var i = 0; i < s.length; i++) {
        console.log(s[i]);
        if ((isNaN(s[i + 1]) == false) && (i != s.length - 2)) {

            for (j = 0; j < s[i + 1]; j++) {
                move(s[i]);
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
        x += n;
    }
    else if (str == "D") {
        y += n;
    }
    else if (str == "L") {
        x -= n;
    }
    else if (str == "U") {
        y -= n;
    }
    context2.lineTo(x, y);
    context2.stroke();
    context4.lineTo(x, y);
    context4.stroke();

}

drawBoard(context1);
drawBoard(context3);

par(str);
