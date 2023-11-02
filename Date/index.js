// Ваш Unix Timestamp
const unixTimestamp = 1698152131;

// Создайте новый объект Date, используя Unix Timestamp
const date = new Date(unixTimestamp * 1000); // Умножьте на 1000, чтобы перевести секунды в миллисекунды

// Получите день, месяц, год и время
const day = date.getUTCDate();
const month = date.getUTCMonth() + 1; // Месяцы в JavaScript начинаются с 0, поэтому добавляем 1
const year = date.getUTCFullYear();
const hours = date.getUTCHours();
const minutes = date.getUTCMinutes();
const seconds = date.getUTCSeconds();

// Выведите текущую дату и время
console.log(`День: ${day}`);
console.log(`Месяц: ${month}`);
console.log(`Год: ${year}`);
console.log(`Время: ${hours}:${minutes}:${seconds}`);

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }
