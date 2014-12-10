var directoryList = ['data', 'text', 'home', 'index', 'style', 'custom', 'about', 'img', 'fonts', 'readme'];

function Node(maxDeep, maxBrothers){
    //var random = directoryList[Math.floor(Math.random()*directoryList.length-1)];
    if( maxDeep > 0 ){
        for( var i = 0; i <= maxBrothers; i++ ){
            this['child-' + i] = new Node(maxDeep - 1, 0); //0 become a random number
        }
    } return;
}

var randomNum = Math.floor( Math.random() * 10 );
var randomBrothers = Math.floor( Math.random() * 5 );
var node = new Node(randomNum, randomBrothers);
console.log(node);

/*
var html = "";
html.innerHTML =+ "<ul> /root";
html.innerHTML =+ //node.render
html.innerHTML =+ "</ul>";
*/

// node.render function
//html.ChildNode = "<li>"+ random +"</li>";


