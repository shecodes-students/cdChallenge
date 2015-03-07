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
function createListOfPaths(tree, childrenPath) {
   // childrenPath = [];
    //childrenPath.push(tree.name);
    for (var i=0;i<tree.children.length - 1; i++) {
            
        childrenPath.push(tree.name +'/' + childrenpath.join());//tree.children[i].name);
        childrenPath = childrenPath.concat(createListOfPaths(tree, childrenPath));
    }        
    return childrenPath;
}

function makeHTMLForTree(tree) {
    var html = '<div>' + tree.name + '</div>';
    html += '<ul>';
    for (var i=0;i<tree.children.length; ++i) {
        html += '<li>';
        html += makeHTMLForTree(tree.children[i]);        
        html += '</li>';
    }        
    html += '</ul>';
    return html;
}

var tree = makeTree('ROOT', 9, 13);
console.log(inspect(tree, false, null, true));

console.log(createListOfPaths(tree, []));
//document.querySelector('#content').innerHTML = 'asdf';
