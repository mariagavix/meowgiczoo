function openChat() {
  const chatBox = document.getElementById('chat-box');
  const buttonContainer = document.getElementById('button-container');

  buttonContainer.innerHTML = '';
  chatBox.innerHTML += '<div class="bot">Какой у тебя питомец?</div>';

  const answers = ['Кот', 'Собака', 'Птица'];
  answers.forEach(answer => {
    const button = document.createElement('button');
    button.classList.add('chat-button');
    button.textContent = answer;
    button.onclick = () => handleAnswer(answer);
    buttonContainer.appendChild(button);
  });
}

function handleAnswer(answer) {
  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML += `<div class="user">${answer}</div>`;

  const buttonContainer = document.getElementById('button-container');
  buttonContainer.innerHTML = '';

  let response = '';
  let link = '';

  if (answer === 'Кот') {
    response = 'Отлично! Твой питомец — кот. Предлагаю начать с корма для котов.';
    link = '<a href="cats-food.html" class="chat-button" target="_blank">Перейти к корму</a>';
  } else if (answer === 'Собака') {
    response = 'Отлично! Твой питомец — собака. Начни с корма для хвостатого друга.';
    link = '<a href="dogs-food.html" class="chat-button" target="_blank">Перейти к корму</a>';
  } else if (answer === 'Птица') {
    response = 'Отлично! Твой питомец — птица. Начни с корма для пернатого друга.';
    link = '<a href="birds-food.html" class="chat-button" target="_blank">Перейти к корму</a>';
  }

  chatBox.innerHTML += `<div class="bot">${response}</div>`;
  chatBox.innerHTML += `<div class="bot">${link}</div>`;
}
function closeChat() {
  const chatContainer = document.getElementById('chat-container');
  chatContainer.style.display = 'none';
}
