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
        //alert(response);
        return response;
    }
    return "";
}

var myMap = null;

function loadParams(dataString) {
    var splitted = dataString.split("\n");
    console.log(splitted);

    myMap = new Map();

    for(var i = 0; i < splitted.length; i++){
        var splitted2 = splitted[i].split("=");
        if (splitted2.length == 2){
            myMap.set(splitted2[0], splitted2[1]);
        }
    }

}

function getParam(propName){

    if(myMap==null)
    {
        loadParams(getFile("task.ini"))
    }

    return myMap.get(propName);

}
