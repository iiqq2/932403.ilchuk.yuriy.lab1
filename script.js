// Демонстрация обработки формы без сервера и передачи персональных данных.
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Форма заполнена корректно. Это учебная демонстрация: сообщение не отправлено и данные не сохранены.';
});

form.addEventListener('input', () => {
  status.textContent = '';
});
