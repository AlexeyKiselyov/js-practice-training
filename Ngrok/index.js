const data = {
  email: 'test1@gmail.com',
  password: 123456,
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '123',
  },
  body: JSON.stringify(data),
};

fetch('https://4d2f-193-194-111-16.ngrok-free.app/auth/sigh-in', requestOptions)
  .then(response => response.json())
  .then(data => {
    // Здесь можно обработать ответ сервера
    console.log(data);
  })
  .catch(error => {
    // Обработка ошибок
    console.error('Ошибка при выполнении запроса:', error);
  });

// fetch('https://api.publicapis.org/entries').then(response => {
//   if (!response.ok) {
//     throw new Error(response.status);
//   }
//   return response.json();
// });
