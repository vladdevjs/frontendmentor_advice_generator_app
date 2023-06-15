const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://api.adviceslip.com/advice';

const number = document.querySelector('.advice_number');
const advice = document.querySelector('.advice');
const button = document.querySelector('.next_advice');

function getAdvice() {
  return fetch(proxyUrl + apiUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.slip.id);
      number.textContent = data.slip.id;
      advice.textContent = data.slip.advice;
    });
}

getAdvice();

button.addEventListener('click', getAdvice);