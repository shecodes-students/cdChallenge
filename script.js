var directoryList = ['data', 'text', 'home', 'index', 'style', 'custom', 'about', 'img', 'fonts', 'readme'];
var nodeCollection =[];
function Node (randomGenerations, randomSiblings, randomName, parentNode) {
    this.randomGenerations = randomGenerations;
    this.randomGenerations = randomGenerations;
    this.randomGenerations = randomGenerations;
    this.parentNode = parentNode;
}

function makeNode(maxGenerations, maxSiblings, name, parentNode){
    var node = new Node();
    if (maxGenerations > 0) {
        for (var i = 0; i < maxSiblings; i++) {
            var randomGenerations = Math.floor( Math.random() * (maxGenerations-1));
            var randomName = directoryList[Math.floor(Math.random()*directoryList.length)];
            var randomSiblings = Math.floor( Math.random() * maxSiblings );
            node[name] = makeNode(randomGenerations, randomSiblings, randomName, node);
        nodeCollection.push(node);
        }
    }
    console.log(node);
    var root = {};
    root.name = 'root';
    var fileTree = {root: node};
    nodeCollection.unshift(root);
//    console.log(nodeCollection);
    return node, nodeCollection;
}
makeNode(3,5,'root', '');
//createRoot(node);
//console.log(nodeCollection);


/*
var html = "";
html.text += "<ul> /root";
html.text += node.randomName;
html.text += node.randomSiblings;
html.text += node.randomGenerations;
html.text += "</ul>";
// node.render function
//html.ChildNode = "<li>"+ random +"</li>";
*/
module.exports = {
    makeNode: makeNode
};

