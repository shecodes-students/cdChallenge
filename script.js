var nameList = ['data', 'text', 'home', 'index', 'style', 'custom', 'about', 'img', 'fonts', 'readme'];
var inspect = require('util').inspect;

function makeTree(name, maxGenerations, maxNumberOfChildren){
    var node = {
        name: name,
        children: []
    };
    if (maxGenerations > 0) {
        var numberOfChildren = Math.floor( Math.random() * maxNumberOfChildren );
        numberOfChildren = Math.min(numberOfChildren, nameList.length);

        // create a copy of the big book of all names
        var myNameList = nameList.slice(); 

        for (var i = 0; i < numberOfChildren; i++) {
            // we pick a random number that is guaranteed
            // to be less than the maxGenerations argument.
            var nextMaxGenerations = Math.floor( Math.random() * (maxGenerations-1));
            var index = Math.floor(Math.random()*myNameList.length);
            var childName = myNameList.splice(index,1)[0];
            
            // we need a way to prevent the same random name to be generated twice
            // (because this would simply overwrite an existing propery)
            var newChild = makeTree(childName, nextMaxGenerations, maxNumberOfChildren);
            node.children.push(newChild);
        }
    }
    return node;
}
function createListOfPaths(tree, prefix) {
    var result = [];
    var currentPath = prefix+tree.name+"/";
    tree.path = currentPath;
    console.log(tree.path);
    result = result.concat(currentPath);
    for (var i=0;i<tree.children.length; i++) {
        result = result.concat(createListOfPaths(tree.children[i], currentPath));
    }        
    return result;
}

function pickStartAndEndPoint(paths) {
    var indexStart, indexEnd;
    do {
        indexStart = Math.floor(Math.random()*paths.length);
        indexEnd = Math.floor(Math.random()*paths.length);
    } while (indexStart === indexEnd);
    var startObject = paths[indexStart];
    var endObject = paths[indexEnd];
    var result = {
        start: startObject,
        end: endObject
    };
    console.log(result);
    return result;
}

function findStartEndConnector(startEndPoint, tree) {
    var splitStart = startEndPoint.start.split('/');
    var splitEnd =startEndPoint.end.split('/');
    var common = [];
    for (var i = 0; i< Math.min(splitStart.length, splitEnd.length) ;i++) {
        if  (splitStart[i] === splitEnd[i]){
            common.push(splitStart[i]);
        }
    }
    return common;
}


//DISPLAY

function makeHTMLForTree(tree) {
    var html = '<div>' + tree.name + '</div>';
    html += '<ul>';
    for (var i=0;i<tree.children.length; ++i) {
        html += '<li>';
        html += makeHTMLForTree(tree.children[i]);        
        html += '</li>';
    }        
    html += '</ul>';
//    console.log(html);
    return html;
}

var tree = makeTree('ROOT', 9, 13);
//makeHTMLForTree(tree);
var paths = createListOfPaths(tree, '');
var startEndPoint = pickStartAndEndPoint(paths);
console.log(findStartEndConnector(startEndPoint));
//console.log(inspect(tree, false, null, true));
//document.querySelector('#content').innerHTML = html;
