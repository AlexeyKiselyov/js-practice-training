// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ: виведи значення використовуючи Object.keys() і for...of
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const userKeys = Object.keys(user);
// first option
// for (let i = 0; i < userKeys.length; i += 1) {
//   console.log(`${userKeys[i]}: ${user[userKeys[i]]}`);
// }
// second option
// for(key of userKeys){
//     console.log(`${key}: ${user[key]}`);
// }
// third option
// userKeys.map((key) => console.log(`${key}: ${user[key]}`));

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
//----------------------------------------//
// console.log(Object.keys(user));
//   console.log(user);
//   const admin = Object.create(user)

//   console.log(admin.name);
//   admin.password = 'qwerty123';
//   console.log(admin);
//   for(let key in admin){
//     if(admin.hasOwnProperty(key)){
//         console.log(key);
//     }

//   }
// const keys = Object.keys(admin)
// for(const key of keys){
//     console.log(admin[key]);
// }
// console.log(keys);

//-----------------------------------------//
//   console.log(user.hobby);
//   const key = prompt();
//   console.log('значення промпт',key);
//   console.log(typeof key);
//   console.log(user[key]);
//   console.log(user['age']);
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false
// const keys = Object.keys(user);
// console.log(keys);
// for(const key of keys){
//     console.log(key , user[key]);
// }

// Example 2 - метод Object.values()
// Є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// console.log(
//   `Sallaries amount: ${Object.values(salaries).reduce(
//     (acc, numb) => acc + numb,
//     0
//   )}`
// );

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
// const values = Object.values(salaries);
// let total = 0;
// console.log(typeof total);
// for(const value of values){
//     total+=value;
// // console.log(value);
// }
// console.log(total);



// Example 3 - Масив об'єктів
// Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
// const stones = [
//   {
//     name: "Смарагд",
//     price: 1300,
//     quantity: 4,
//   },
//   {
//     name: "Діамант",
//     price: 2700,
//     quantity: 3,
//   },
//   {
//     name: "Сапфір",
//     price: 400,
//     quantity: 7,
//   },
//   {
//     name: "Аквамарин",
//     price: 200,
//     quantity: 2,
//   },
// ];

// function stonesResult(data, string) {
//   let result = null;
//   for (const stone of data) {
//     if(stone.name===string){
//       result = `Загальна вартість ${stone.name}ів - ${stone.price*stone.quantity}. Ціна на одиницю - ${stone.price}, кількість - ${stone.quantity}`
//       return result;
//     }
//   }
//   return "Не знайдено"
// }

// function stonesResult(data, string){
//   const result = data.filter(el =>el.name.toLowerCase() === string.toLowerCase());
//   const {name, price, quantity} = result[0];
//   return `Загальна вартість ${name}ів - ${price*quantity}. Ціна на одиницю - ${price}, кількість - ${quantity}`
// }

// console.log(stonesResult(stones, "Сапфір"));

// const stones = [{
//         name: 'Смарагд',
//         price: 1300,
//         quantity: 4
//     },
//     {
//         name: 'Діамант',
//         price: 2700,
//         quantity: 3
//     },
//     {
//         name: 'Сапфір',
//         price: 400,
//         quantity: 7
//     },
//     {
//         name: 'Аквамарин',
//         price: 200,
//         quantity: 2
//     },
// ];

// function calcTotalPrice(stones, stoneName) {
//     let result = 0;
//     for (const stone of stones) {
//         if (stoneName === stone.name) {
//             result = stone.price * stone.quantity;
//             return result;
//         }
//     }

//  return 'Незнайдено';
// }

// const result = calcTotalPrice(stones, 'Сафір');
// console.log(result);

// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет-банку. Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій лише два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      id: this.transactions.length,
      amount,
      type,
    };
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */

  deposit(amount) {
    this.balance += amount;
    const result = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(result);
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * Після чого додає його в історію транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      return ` Зняття такої суми (${amount})не можливе, недостатньо коштів (${this.balance})`;
    } else {
      this.balance -= amount;
      const result = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(result);
    }
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзації по id
   */
  getTransactionDetails(id) {
    const index = this.transactions.findIndex(
      (transaction) => transaction.id === id
    );
    const result = this.transactions[index];
    return result;
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let result = 0;
    const nesessaryTransactions = this.transactions.filter(
      (transaction) => transaction.type === type
    );
    console.log(nesessaryTransactions);
    nesessaryTransactions.forEach((transaction) => result += transaction.amount);
    return result;
  },
};

// account.createTransaction(1000, Transaction.DEPOSIT);
account.deposit(1000);
// console.log(account.balance);
account.deposit(2000);
// console.log(account.balance);
account.withdraw(500)
account.withdraw(200)
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(0));
console.log(account.getTransactionTotal("deposit"));
console.log(account.getTransactionTotal("withdraw"));


console.log(account);
