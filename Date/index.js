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

const now = new Date().toISOString();

console.log(now);

const now1 = new Date().toISOString();

console.log(now1);

const diff = now1 < now;

console.log(diff);

console.log(new Date());

console.log(new Date('2050-01-01'));
console.log(new Date() - new Date('2050-01-01'));

const date1 = new Date('2050-01-01').toISOString();
const date2 = new Date('2050-01-01').toISOString();

console.log(date1 === date2);
