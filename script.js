//adding items to list

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');


function addItem(e){
    e.preventDefault();

    const newItem = itemInput.value

    //validate input

    if (newItem === '') {
        alert("Please enter an item");
        return;
    }

    //create list item

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
   
    const button = createButton('remove-item btn-link text-red')
    li.appendChild(button)

    itemList.appendChild(li)
    itemInput.value = ''
}
function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark')
    button.appendChild(icon);
    return button;
}

function createIcon(classes){
    const icon = document.createElement('i')
    icon.className = classes;
    return icon;
}


//Event listeners


//deleting items from list

function removeItem (e){
    if (e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove()
    }
}

//clear all btn

function ClearItems(e){
while (itemList.firstChild){
    itemList.removeChild(itemList.firstChild)
}
}

itemForm.addEventListener('submit',addItem)
itemList.addEventListener('click',removeItem)
clearBtn.addEventListener('click',ClearItems)
