var nodeCollection = [];
var directoryList = ['data', 'source', 'html', 'server','public','private', 'bin', 'user', 'etc', 'modules', 'temp'];
var nestedList = '';
function Node(maxGenerations, maxSiblings, name, parentNode) {
    nodeCollection.push(this);
    this.name = name;
    this.parentNode = parentNode;
    if (maxGenerations > 0) {
        for (var i = 0; i < maxSiblings; i++) {
            var randomGenerations = Math.floor( Math.random() * (maxGenerations-1));
            var randomName; //defined here, otherwise JSlint triggers error
            while (this[randomName]) { //make sure name isn't repeated
                randomName = directoryList[Math.floor(Math.random()*directoryList.length)];
            }
            var randomSiblings = Math.floor( Math.random() * maxSiblings );
            this[randomName] = new Node(randomGenerations, randomSiblings, randomName, this);
        }
    }

    this.toHTML = function() {
        if (this.parentNode === '') {
            nestedList = '<ul>' + this[name];
        } else {
            nestedList += '<li>' + this[randomName] + '</li>';
        }
        nestedList += '</ul>';
    };
    $('#tree').html(nestedList);
    return nestedList, this;
}
var root = new Node(4,2,'root', '');
console.log(nestedList);
console.log(root.toHTML());

module.exports = {
    Node: Node,
    nestedList : nestedList
};

