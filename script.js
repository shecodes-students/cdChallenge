
var list = document.createElement('ul');

var directoryList = ['data', 'text', 'home', 'index', 'style', 'custom', 'about', 'img', 'fonts', 'readme'];

document.body.appendChild(list);
function randomTree() {
    for (var i=0; i<directoryList.length; i++) {
        var element = document.createElement('li');
            directoryList.appendChild(element);
            element.innerHTML = element.innerHTML + directoryList[i];
    }		
//first tree level fixed and equal to tree	
var root = "/root";

//conditions for depth, wideness and shallowness of the tree

function Node (maxDepth, maxWide) {

var maxDepth = 3; //tree can be 3 levels deep excluding root
var maxBrunchWide = 3; //each node can have max 3 children

// i didn't think for now on how to assure that just one element from the array is chosen 
    this.name = randomFromDirectoryList(directoryList.length);
    this.parentNode = function () {
        do 
        var paternityTest = randomFromDirectoryList(); 
        while (paternityTest === this.name)
        return paternityTest; // not sure what this do function returns!
        // how do I make it so that the parentNode = output of function?
    };
    this.childrenNode = function() {
	for (var i === 0; maxBrunchWide - 1; i++) {
	this.childrenNode[i] = randomFromDirectoryList();
	}	
    };

    function randomFromDirectoryList () {
        var randomIndex = Math.floor(Math.random()*directoryList.length-1);
        var random = directoryList[randomIndex];
        return random;
    }
};


//create random numbers between 1 and directoryList.length to pick array values

}
