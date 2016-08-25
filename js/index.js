loadParamFpomFile("tasks\\1-2кл, 1 урок, Исполнитель по шаблону\\1001\\task.ini");
var str = getParam("TaskPicture");

var canvas1 = document.getElementById("canvas1");
var canvas2 = document.getElementById("canvas2");
var context1 = canvas1.getContext("2d");
var context3 = canvas1.getContext("2d");
var context2 = canvas2.getContext("2d");
var context4 = canvas2.getContext("2d");

var map = new Map();
map.set("context",context1);
map.set("gridColor","#CBDBE1");
map.set("color","blue");

drawBoard(map);
par(str, map);


map.set("color","#CBDBE1");
map.set("context",context2);
drawBoard(map);
par(str, map);


