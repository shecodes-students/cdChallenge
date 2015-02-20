var directoryList = ['data', 'text', 'home', 'index', 'style', 'custom', 'about', 'img', 'fonts', 'readme'];

var uniqueKey = 0;
function makeNode(maxGenerations, maxSiblings, uniqueKey){
    var node = {};
    node.name = name;
    if (maxGenerations > 0) {
        for (var i = 1; i <= maxSiblings; i++) {
            var randomGenerations = Math.floor( Math.random() * (maxGenerations-1));
            var randomName = directoryList[Math.floor(Math.random()*directoryList.length)];
            var randomSiblings = Math.floor( Math.random() * maxSiblings );
            // we need a way to prevent the same random name to be generated twice
            // (because this would simply overwrite an existing propery)
            uniqueKey ++;
            node[randomName] = makeNode(randomGenerations, randomSiblings, uniqueKey);
        }
    }
    return node;
}

function addRoot (node) {
    var fileTree = {root: node};
    console.log(fileTree);
    console.log(fileTree.root);
    return fileTree, uniqueKey;
}
addRoot(makeNode(3,5));

function pickRandomStartAndTargetPosition (fileTree) {
    var startObjectKey;  
}


var html = "";
html.text += "<ul> /root";
html.text += node.randomName;
html.text += node.randomSiblings;
html.text += node.randomGenerations;
html.text += "</ul>";
// node.render function
//html.ChildNode = "<li>"+ random +"</li>";

module.exports = {
    makeNode: makeNode
};

