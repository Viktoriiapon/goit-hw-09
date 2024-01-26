// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('.feedback-form');
  
//     // Відстеження події input та запис у локальне сховище
//     form.addEventListener('input', function (event) {
//       const formData = {
//         email: form.email.value.trim(),
//         message: form.message.value.trim()
//       };
  
//       localStorage.setItem('feedback-form-state', JSON.stringify(formData));
//     });
  
//     // Перевірка стану сховища під час завантаження сторінки
//     const savedData = localStorage.getItem('feedback-form-state');
  
//     if (savedData) {
//       const parsedData = JSON.parse(savedData);
//       form.email.value = parsedData.email;
//       form.message.value = parsedData.message;
//     }
  
//     // Сабміт форми
//     form.addEventListener('submit', function (event) {
//       event.preventDefault();
  
//       const formData = {
//         email: form.email.value.trim(),
//         message: form.message.value.trim()
//       };
  
//       // Перевірка, чи обидва елементи форми заповнені перед сабмітом
//       if (formData.email !== '' && formData.message !== '') {
//         console.log(formData); // Виведення у консоль об'єкта з даними
//         localStorage.removeItem('feedback-form-state'); // Очищення сховища
//         form.reset(); // Очищення полів форми
//       } else {
//         alert('Please fill in both email and message fields.');
//       }
//     });
//   });


const STORAGE_KEY = 'user-data';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', function (event) {
  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim()
  };

  saveToLS(STORAGE_KEY, formData);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = loadFromLS(STORAGE_KEY) || {};
  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

function loadFromLS(key = 'empty') {
  const data = localStorage.getItem(key); 

  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return {}; 
  }
}

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function restoreData() {
  const data = loadFromLS(STORAGE_KEY) || {};

  form.email.value = data.email || ''; 
  form.message.value = data.message || '';
}

restoreData();