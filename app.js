
// 上から読まれます！！！

console.log(window.localStorage);

let data = [];//もしローカルストレージにデータがなかったらこっちが採用される

// ２回目に読み込むとき
// ローカルストレージにもしデータがあればからのところに上書きする
if (localStorage.getItem('task')){
  
    data = JSON.parse(localStorage.getItem('task'));

}

// クリックしないと作動しない
// だからエラーを吐いた時の確認でここはスルー
// ロードなら注意
document.getElementById('add')
.addEventListener('click',

  function(){

    data.push(document.getElementById('task').value);
    createDOM(document.getElementById('task').value);
    localStorage.setItem('task', JSON.stringify(data));

  }
);


for (const value of data) {
  createDOM(value);
}
// HTMLを出力するよーここではli
function createDOM(value){

  let list = document.createElement('li');
  // liタグ内に値を追加
  list.textContent = value;
  // 親要素ulのid=listに子要素として追加
  document.getElementById('list').appendChild(list);

}