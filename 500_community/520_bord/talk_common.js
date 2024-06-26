const output_csv = document.getElementById('talk_csv');

function csv_data(dataPath) {
	const request = new XMLHttpRequest(); // HTTPでファイルを読み込む
	request.addEventListener('load', (event) => { // ロードさせ実行
		const response = event.target.responseText; // 受け取ったテキストを返す
		csv_array(response); //csv_arrayの関数を実行
	});
	request.open('GET', dataPath, true); // csvのパスを指定
	request.send();
}

function csv_array(data) {
	const dataArray = []; //配列を用意
	const dataString = data.split('\n'); //改行で分割
	for (let i = 0; i < dataString.length; i++) { //あるだけループ
		dataArray[i] = dataString[i].split(',');
	}
	let insertElement = ''; //テーブルタグに表示する用の変数
	dataArray.forEach((element) => { //配列の中身を表示
		insertElement += '<div class="box1">';
		element.forEach((childElement) => {
			insertElement += `<p>${childElement}</p><hr>`;
		});
		insertElement += '</div>';
	});
	output_csv.innerHTML = insertElement; // 表示
}
csv_data('talk.csv'); // csvのパス