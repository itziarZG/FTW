const writeThis = (word, num) => {
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
};

function writeMyArray(array) {
  for (let index = 0; index < array.length; index++) {
    const text = array[index].text;
    const total = array[index].total;

    writeThis(text, total);
  }
}

let myWordList = [];
// fetch(
//   "https://beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json"
// )
//   .then((Response) => Response.text())
fetch(
  "https://beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    writeMyArray(data.results);
  });
