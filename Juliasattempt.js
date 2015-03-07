var myobject = { root:
    { text: { home: {} }, style: { text: {}, home: {}, index: {} } } };

var paths =[];
function getChildren(data) {
    var thispath = [];
    for (var i in data){
            thispath.push(i);
            paths.push(thispath);
            getChildren(data[i]);
    }
    return paths;
}

console.log(getChildren(myobject));
