

console.log(window.localStorage);

let data = [];

document.getElementById('add')
.addEventListener('click',

  function(){

    data.push(document.getElementById('task').value);
    createDOM(document.getElementById('task').value);
    localStorage.setItem('task', JSON.stringify(data));

  }
);

data = JSON.parse(localStorage.getItem('task'));// forの前に置かないとできない

for (const value of data) {
  createDOM(value);
}

function createDOM(value){

  let list = document.createElement('li');
  list.textContent = value;
  document.getElementById('list').appendChild(list);

}