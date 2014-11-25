
var list = document.createElement('ul');
document.body.appendChild(list);

for (var i=0; i<10; i++) {
    var element = document.createElement('li');
    list.appendChild(element);
    element.innerHtml = "item #" + i;
}

