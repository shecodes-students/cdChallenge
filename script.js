
var list = document.createElement('ul');
document.body.appendChild(list);
var arrayList = ['data', 'text', 'home', 'index', 'style', 'custom', 'about', 'img', 'fonts', 'readme'];
for (var i=0; i<arrayList.length; i++) {
    var element = document.createElement('li');
    list.appendChild(element);
    element.innerHTML = element.innerHTML + arrayList[i];

}

