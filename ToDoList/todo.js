let itemList = [];

let storedItems = localStorage.getItem('todo-tasks');
itemList = JSON.parse(storedItems) || [];
displayItems();

function userInput() {
    let inputTextVar = document.querySelector('#input-Text');
    let inputDateVar = document.querySelector('#input-Date');
    let inputText = inputTextVar.value;
    let inputDate = inputDateVar.value;
    if (inputText && inputDate) {
        itemList.push({ item: inputText, dueDate: inputDate });
        inputTextVar.value = '';
        inputDateVar.value = '';
        localStorage.setItem('todo-tasks', JSON.stringify(itemList)); // Update local storage
        displayItems();
    }
    else{
        alert("Fill the input fields")
    }
}



function displayItems() {
    let itemContainerVar = document.querySelector('.item-container');
    let newHtml = '';
    for (let i = 0; i < itemList.length; i++) {
        let { item, dueDate } = itemList[i];
        newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button id='delete-btn' class='btn' onclick="deleteItem(${i}); displayItems();">Delete</button>
    `;
        localStorage.setItem('todo-tasks', JSON.stringify(itemList));
    }
    itemContainerVar.innerHTML = newHtml;
}

function deleteItem(index){
    itemList.splice(index,1);
    localStorage.setItem('todo-tasks', JSON.stringify(itemList));
    displayItems();
}