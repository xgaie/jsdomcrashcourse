// EXAMINE THE DOCUMENT OBJECT //

//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent= 'hello';
//console.log(document.forms[0]);
//console.log(document.links); 
//console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.document.getElementById('header-title');
// var headerTitle = document.document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goddbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// Gives error
// items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//    items[i].style.backgroundColor = '#f4f4f4';
//}

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// Gives error
// li.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//    li[i].style.backgroundColor = '#f4f4f4';
//}

// QUERYSELECTOR //
//var header = document.querySelector('main-header');
//header.style.borderBottom = 'solid 4px #ccc';

//var input = document.querySelector('input');
//input.value = 'hello world'

//var submit = document.querySelector('input[type="submit"]');
//submit.value="SEND"

//var item = document.querySelector('.list-group-item');
//item.style.color = 'red';

//var lastItem = document.querySelector
//('.list-group-item:last-child');
//lastItem.style.color = 'blue';

//var secondItem = document.querySelector
//('.list-group-item:nth-child(2)');
//secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i < odd.length; i++){
//    odd[i].style.backgroundColor = '#f4f4f4';
//    even[i].style.backgroundColor = '#ccc';
//}

// TRAVERSING THE DOM //
var itemsList = document.querySelector('#items');
// parentNode
// console.log(itemsList.parentNode); 
// itemsList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemsList.parentNode.parentNode.parentNode); 

// parentElement
// console.log(itemsList.parentElement); 
// itemsList.parentElement.style.backgroundColor = '#f4f4f4'
// console.log(itemsList.parentElement.parentElement.parentElement); 

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello 1';


// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';
 
// createElement

// Create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className= 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title','Hello Div')

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);