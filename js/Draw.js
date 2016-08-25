
var delta = 50;
var width = getParam("BoardWidth");
var height = getParam("BoardHeight");

var bw = width * delta;
var bh = height * delta;
var padding = 4;
var j = 0;

var x = padding;
var y = padding;

function drawBoard(map) {
    var context = map.get("context");
    context.beginPath();
    for (var i = 0; i <= bw; i += delta) {
        context.moveTo(0.5 + i + padding, padding);
        context.lineTo(0.5 + i + padding, bh + padding);
    }
    for (var i = 0; i <= bh; i += delta) {
        context.moveTo(padding, 0.5 + i + padding);
        context.lineTo(bw + padding, 0.5 + i + padding);
    }
    context.strokeStyle = map.get("gridColor");
    context.stroke();
}

function draw(dx, dy, vis) {
    c.lineWidth = 3;
    c.lineCup = 'round';
    c.strokeStyle = map.get("color")
    c.beginPath();
    c.moveTo(x*delta + ofsX, y*delta + ofsY);
    x +=  dx;
    y +=  dy;


    if (vis)
        c.lineTo(x*delta + ofsX, y*delta + ofsY);
    c.stroke();
}

function par(s, map) {
    var context = map.get("context");
    context.beginPath();
    context.strokeStyle = map.get("color");


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
    var context = map.get("context");
    context.moveTo(x, y);
    if (str == "R") {
        x += delta;
    }
    else if (str == "D") {
        y += delta;
    }
    else if (str == "L") {
        x -= delta;
    }
    else if (str == "U") {
        y -= delta;
    }
    context.lineTo(x, y);
    context.stroke();

}

