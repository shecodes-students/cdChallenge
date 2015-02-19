var directoryList = ['data', 'text', 'home', 'index', 'style', 'custom', 'about', 'img', 'fonts', 'readme'];

function makeNode(maxGenerations, maxSiblings){
    var node = {};
    if (maxGenerations > 0) {
        for (var i = 0; i < maxSiblings; i++) {
            var randomGenerations = Math.floor( Math.random() * (maxGenerations-1));
            console.log("RG:"+randomGenerations);
            var randomName = directoryList[Math.floor(Math.random()*directoryList.length)];
            console.log("RN:"+randomName);
            var randomSiblings = Math.floor( Math.random() * maxSiblings );
            console.log("RS:"+randomSiblings);
            // we need a way to prevent the same random name to be generated twice
            // (because this would simply overwrite an existing propery)
            node[randomName] = makeNode(randomGenerations, randomSiblings);
            console.log("node"+node[randomName]);
        }
    }
    return;
}

var test = makeNode(5, 3);
console.log(test);

/*
var html = "";
html.innerHTML =+ "<ul> /root";
html.innerHTML =+ //node.render
html.innerHTML =+ "</ul>";
*/

// node.render function
//html.ChildNode = "<li>"+ random +"</li>";

