var directoryList = ['data', 'text', 'home', 'index', 'style', 'custom', 'about', 'img', 'fonts', 'readme'];

function makeNode(maxGenerations, maxSiblings){
    var node = {};
    if (maxGenerations > 0) {
        for (var i = 0; i <= maxSiblings; i++) {
            var randomGenerations = Math.floor( Math.random() * (maxGenerations-1));
            var randomName = directoryList[Math.floor(Math.random()*directoryList.length)];
            var randomSiblings = Math.floor( Math.random() * maxSiblings );
            // we need a way to prevent the same random name to be generated twice
            // (because this would simply overwrite an existing propery)
            node[randomName] = makeNode(randomGenerations, randomSiblings);
        }
    }
    return;
}

var node = makeNode(5, 3);
console.log(node);

/*
var html = "";
html.innerHTML =+ "<ul> /root";
html.innerHTML =+ //node.render
html.innerHTML =+ "</ul>";
*/

// node.render function
//html.ChildNode = "<li>"+ random +"</li>";

