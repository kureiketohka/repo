const outputElement = document.getElementById('test_csv');

function getCsvData(dataPath) {
 const request = new XMLHttpRequest();
 request.addEventListener('load', (event) => {
  const response = event.target.responseText;
  outputElement.innerHTML = response;
 });
 request.open('GET', dataPath, true);
 request.send();
}

getCsvData('test.csv');