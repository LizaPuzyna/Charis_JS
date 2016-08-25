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

function getFile(name) {
    var xmlhttp = getXmlHttp();
    xmlhttp.open('GET', name, false);
    xmlhttp.send(null);
    if (xmlhttp.status == 200) {
        response = xmlhttp.responseText;
        return response;
    }
    return "";
}

var myMap = null;

function loadParams(dataString) {
    var splitted = dataString.trim().split("\n");

    myMap = new Map();

    for(var i = 0; i < splitted.length; i++){
        var splitted2 = splitted[i].split("=");
        if (splitted2.length == 2){
            myMap.set(splitted2[0], splitted2[1].trim());
        }
    }

    var attrDir = getParam("SolutionPictureAttributes").split(",");
    for(var i = 0; i < attrDir.length; i++){
        if (attrDir[i] == "V"){
            myMap.set("PresetUp","true");
            myMap.set("PresetDown","true");
        }
        else if (attrDir[i] == "H"){
            myMap.set("PresetRight","true");
            myMap.set("PresetLeft","true");
        }
        else if (attrDir[i] == "Diag"){
            myMap.set("PresetRightUp","true");
            myMap.set("PresetRightDown","true");
            myMap.set("PresetLeftUp","true");
            myMap.set("PresetLeftDown","true");
        }
        else if (attrDir[i] == "RD"){
            myMap.set("PresentRight", "true");
            myMap.set("PresentDown", "true");
        }
        else if (attrDir[i] == "Circle"){
            myMap.set("PresentCircle", "true");
        }
        else if (attrDir[i] == "Flag"){
            myMap.set("PresentFlag", "true");
        }
        else if (attrDir[i] == "J"){
            myMap.set("PresentJumpRight", "true");
        }
        else if (attrDir[i] == "JD"){
            myMap.set("PresentJumpDown", "true");
        }
    }
}

function loadParamFpomFile(fileName) {
    loadParams(getFile(fileName));
}

function getParam(propName){
    if(myMap==null)
    {
        loadParamFpomFile("task.ini");
    }
    return myMap.get(propName);
}



