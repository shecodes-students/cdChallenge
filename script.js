var directoryList = ['data', 'text', 'home', 'index', 'style', 'custom', 'about', 'img', 'fonts', 'readme'];

function makeNode(name, maxGenerations, maxSiblings){
    var node = {};
    node.name = name;
    if (maxGenerations > 0) {
        //while (node[randomName] != node[randomName])
        for (var i = 1; i <= maxSiblings; i++) {
            var randomGenerations = Math.floor( Math.random() * (maxGenerations-1));
            var randomName = directoryList[Math.floor(Math.random()*directoryList.length)];
            var randomSiblings = Math.floor( Math.random() * maxSiblings );
            // we need a way to prevent the same random name to be generated twice
            // (because this would simply overwrite an existing propery)
                node[randomName] = makeNode(randomName, randomGenerations, randomSiblings);
//                console.log(node[name]); 
        }
    }
    console.log("maxGenerations:" + maxGenerations+ ", maxSiblings:" + maxSiblings + " node:" + node);
    return node;
}

var node = makeNode("root",6,9);
console.log(node);

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

