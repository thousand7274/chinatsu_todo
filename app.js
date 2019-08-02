
// 上から読まれます！！！
// 長いなぁ、でも何回も使うなぁと思うものは少しずつ関数にして保存していく
// そしたら短くなるし間違えにくくなる

// console.log(window.localStorage);

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
    // 長いので一つにまとめる。taskを代入
    const task = document.getElementById('task')
    // タスクの値を配列dataに追加
    data.push(task.value);
    // タスクを追加
    createDOM(task.value);
    // dataをローカルストレージに保存
    dataUpdated();
    // タスクのvalueを初期化
    task.value = "";
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

  let button = document.createElement('button');
  button.textContent = '削除';
  // console.log(button);
  // ボタンを出力リストの後ろにつく
  list.appendChild(button);
  button.addEventListener('click', remove)
  // 親要素ulのid=listに子要素として追加
  document.getElementById('list').appendChild(list);
}

// 削除ボタン関数化
function remove(){
  this.parentNode.remove();//要素を削除
    // console.log(this.parentNode.textContent)
    //ストレージ内のデータを探すのはindexOf一致すれば削除できる
    // 配列の中でどこにあるか探すindexOf
    // 配列の中の一致する項目を探す
    // spliceで配列を削除
    // innerHTMLにすると意図しないデザインに変更されてしまうから使うのは良くない
    // htmlをなるべくデータとして入れないほうが安全
    // アラートとか変なサイトを仕込まれたら困るから
    // 最近のブラウザはフォームにjsやcssを追加できないようになっている
    data.splice(data.indexOf(this.parentNode.textContent.slice( 0,-2)), 1);
    // Element.slice(0,-2)「削除」の文字が出てしまうからこれで消す-2の部分は文字で値が変わる
    // 最後から二文字目ってことマイナスしなかったら前からマイナスしたら後ろから
  // console.log(data)
  // データを保存
  dataUpdated();
}

function dataUpdated(){
  // ローカルストレージへ保存の関数
  localStorage.setItem('task', JSON.stringify(data));

}