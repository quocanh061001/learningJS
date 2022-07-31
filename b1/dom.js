//html dom

//1.element : id, class, tag, css selector, html collection
//2.attribute
//3.text

//khi trinh duyet doc tat ca ma html thi no tao ra 1 document object model. khi no tao 1 dom thi no luu vao 1 bien document => muon truy cap elem, attribute, text thi phai di qua doi tuong document
// console.log(document)


//---------------------------------------------------1
//get element method()
//html collection : giong mang (ko co phuong thuc cua mang)
//Nodelist : cung la collection

var headingNode = document.getElementById('heading');  //=>tra ve object. vd: key: tagname#id_name

var headingNodes = document.getElementsByClassName('heading');//=>tra ve htmlcolection

var tagname = document.getElementsByTagName('h1')
// console.log({
//   element: headingNode
// });
// console.log(headingNodes)

// console.log(tagname)

//css selector
// var cssselector = document.querySelector('.dad .son:nth-child(2)')

// var cssselector = document.querySelectorAll('.dad .son')
// console.log(cssselector)


//--------------------------------------------2
//Get element 2
var firstBox = document.querySelector('.box-1');
//tro toi the cha
// console.log(firstBox);

//truy cap toi cac the con
// console.log(firstBox.querySelectorAll('li'));
// console.log(firstBox.querySelectorAll('p'));


//---------------------------Get element 3


//----------------------------------------------3
//Atribute Node and text node


//-----------------------------------4
//Dom Atributes

// var headingElement = document.querySelector('h1');

// headingElement.className = 'Heading'

//add attribute that doesn't nessarry match the element
// headingElement.setAttribute('id', 'hello');

//get atribute
// console.log(headingElement.className);
// console.log(headingElement.getAttribute('id'));



//----------------------------------5
//innerText vs TextContent Property
// var headingElem = document.querySelector('.heading');
// console.log(headingElem.innerText);
// headingElem.innerText = 'hello papa';

//innerText return what you actually see in browser while textcontent return textnode of the element
// console.log(headingElem.innerText);
// console.log(headingElem.textContent);
//innerText chi co the truy cap o cap do element node. textcontent co the truy cap o ca element node và textnode

// var getTagElem = document.querySelector('h1');
// getTagElem.innerText = `

// halo ha

// `;
// getTagElem.textContent = `
 
// aladin

// `;


//--------------------------------6
/**
 * innerHTLM, outerHTML: thuộc tính của elementNode. trả về elementNode bên trong
 */
var boxElement = document.querySelector('.box');
boxElement.innerHTML = `<h1 title="heading">Heading</h1>`;
// console.log(document.querySelector('h1').innerText);
// console.log(boxElement.innerHTML)
// boxElement.outerHTML = `<span>Test</span>`;
// console.log(boxElement.innerHTML );

console.log([boxElement])


