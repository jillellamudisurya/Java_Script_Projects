
//Main Background Container
let bgContainer = document.createElement('div');
bgContainer.classList.add('main-background');
document.body.appendChild(bgContainer);

//Heading Element
let headingElem = document.createElement('h1');
headingElem.textContent = 'Grocery List'
headingElem.classList.add('heading');
bgContainer.appendChild(headingElem);

//Grocery List container
let listContainer = document.createElement('div');
bgContainer.appendChild(listContainer);

//Unordered list
let unorderList = document.createElement('ul');
unorderList.classList.add('list-container');
bgContainer.appendChild(unorderList);

//List Elements

let groceryItems = ["Milk","Peanut Butter","Choco Chips","Tomato Sauce","Cup Cakes","Noodles"];
for(let gorceryItem of groceryItems){
	let listElem1 = document.createElement('li');
	listElem1.textContent = gorceryItem;
	unorderList.appendChild(listElem1);
}

//checkbox and label
let checkboxElem = document.createElement('input');
checkboxElem.type = 'checkbox';
checkboxElem.id = 'checkBox';
bgContainer.appendChild(checkboxElem);

let labelElem = document.createElement('label');
labelElem.setAttribute("for","checkBox");
labelElem.textContent = 'Need Home Delivery';
labelElem.classList.add('checkbox-label');
bgContainer.appendChild(labelElem);

let lastContainer = document.createElement('div');
lastContainer.classList.add('button-div');
bgContainer.appendChild(lastContainer);


let buttonElem = document.createElement('button');
buttonElem.classList.add('button-style');
buttonElem.textContent = "Proceed To Pay";
lastContainer.appendChild(buttonElem);