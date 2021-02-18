//seems like local storage works as expected
//Todo List structure
//  Project
//    fields: name, ItemList
//    actions: create, edit, delete 
//  Item
//    fields: title, description, duedate, priority, status (complete or not)
//      use 'date-fns' library for formatting dates
//    actions: create, edit, delete
//  UI
//    project index
//    item index of chosen project (serves as project detail)
//    item details
//


const container = document.querySelector('#container');
const msg = document.createElement('div');

if(localStorage.clickcount) {
  localStorage.clickcount = Number(localStorage.clickcount) + 1;
}else{
  localStorage.clickcount = 1;
}

msg.textContent = String(localStorage.clickcount);
container.appendChild(msg);




