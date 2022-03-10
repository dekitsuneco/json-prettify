const jsonInput = document.querySelector('.json-panel__textarea--input');
const jsonOutput = document.querySelector('.json-panel__textarea--output');

const btnFormat = document.querySelector('.actions__btn-convert--format');
const btnMinify = document.querySelector('.actions__btn-convert--minify');

btnFormat.addEventListener('click', () => {
  const rawJson = jsonInput.value;

  try {
    const formattedJson = JSON.stringify(JSON.parse(rawJson), null, 2);

    jsonOutput.value = formattedJson;
  } catch {
    jsonOutput.value = 'Ivalid JSON!';
  }
});

btnMinify.addEventListener('click', () => {
  const rawJson = jsonInput.value;

  try {
    const minifiedJson = JSON.stringify(JSON.parse(rawJson));

    jsonOutput.value = minifiedJson;
  } catch {
    jsonOutput.value = 'Ivalid JSON!';
  }
});
