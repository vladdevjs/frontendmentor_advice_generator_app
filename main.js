const number = document.querySelector('.advice_number');
const advice = document.querySelector('.advice');
const button = document.querySelector('.next_advice');

const getAdvice = async () => {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();
  number.textContent = data.slip.id;
  advice.textContent = data.slip.advice;
};

getAdvice();

button.addEventListener('click', getAdvice);
