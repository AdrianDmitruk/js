// Задание 1

// Напишите функцию, которая принимает три числовых аргумента: number, min, max.
// Функция проверяет, находится ли число number в диапазоне чисел от min до max.
// 1 вариант решения: с помощью логического И в условии.
// *2 вариант решения: с помощью логического ИЛИ в условии.

// И

const testRange = (number, min, max) => {
  let result = 0;
  if (number > min && number < max) {
    result = `Число ${number} прошло проверку`;
  } else {
    result = `Число ${number} не прошло проверку`;
  }
  return result;
};

testRange(29, 2, 28);

console.log(testRange(22, 2, 28));

// ИЛИ =)))))

const testRange = (number, min, max) => {
  let result = 0;
  if ((number > min && number < max) || (number > min && number < max)) {
    result = `Число ${number} прошло проверку`;
  } else {
    result = `Число ${number} не прошло проверку`;
  }
  return result;
};

testRange(29, 2, 28);

console.log(testRange(29, 2, 28));

//----------------------------------------------------------------------------------------

// Задание 2

// Есть объект с именами и заработными платами инженеров:

const engineers = {
  Den: 1000,
  Matt: 5000,
  Steve: 2000,
};

// Вывести в консоль через шаблонные строки заработную плату
// всех работников в таком формате:
// Заработная плата ххх составляет ххх рублей.

for (let property in engineers) {
  console.log(`Заработная плата ${property} составляет ${engineers[property]} рублей`);
}

//----------------------------------------------------------------------------------------

// Задание 3

// Создать массив из 5 элементов.
// Используя цикл for, вывести каждый второй элемент массива в консоль.

let numbers = [1, 2, 3, 4, 5];

// let items = 0 или 1 , в условии непонятно =))))

for (let items = 1; items < numbers.length; items += 2) {
  let result = numbers[items];
  console.log(result);
}

//----------------------------------------------------------------------------------------

// Задание 4

// Есть массив произвольных чисел:

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.

for (let items = 0; items < numbers.length; items++) {
  let result = `Индексу ${items} соответствует число ${numbers[items]}`;
  console.log(result);
}

//----------------------------------------------------------------------------------------

// Задание 5

// Дан массив объектов, например:

let questions = [
  {
    question: "What's the currency of the USA?",
    choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
    corAnswer: 0,
  },
  {
    question: 'Where was the American Declaration of Independence signed?',
    choices: ['Philadelphia', 'At the bottom', "Frankie's Pub", 'China'],
    corAnswer: 0,
  },
];

// Добавить в каждый объект дополнительное поле usersAnswer со значением null.
// Решение должно работать для массива любой длины.

for (items in questions) {
  questions[items].usersAnswer = null;
}

console.log(questions);

//----------------------------------------------------------------------------------------

// Задание 6

// Есть массив произвольных чисел:

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

// 1) Посчитать и вывести в консоль сумму элементов в массиве.
// 2) Посчитать и вывести в консоль сумму четных элементов в массиве.
// 3) Найти и вывести в консоль максимальное число массива.
// 4) Определить и вывести в консоль индекс максимального числа массива (или индексы,
// если число встречается более одного раза).

let sum = 0;
let sumEvenElement = 0;
let maxNumber = numbers[0];
let indexMaxNumbers = [];

for (let items = 0; items < numbers.length; items++) {
  sum += numbers[items];

  if (numbers[items] % 2 === 0) {
    sumEvenElement += numbers[items];
  }

  if (maxNumber <= numbers[items]) {
    maxNumber = numbers[items];
  }
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === maxNumber) {
    indexMaxNumbers.push(i);
  }
}

console.log(`Сумма всех элементов: ${sum}`);
console.log(`Сумма четных элементов: ${sumEvenElement}`);
console.log(`Максимальное число: ${maxNumber}`);
console.log(`Индекс максимального чисал: ${indexMaxNumbers}`);

//----------------------------------------------------------------------------------------

// Задание 7

// Определить массив

let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let newArr = [];

// В цикле создать новый массив из элементов массива arr,
// но в новом должны содержаться только положительные элементы.

for (let item of arr) {
  if (item >= 0) {
    newArr.push(item);
  }
}

console.log(newArr);

//----------------------------------------------------------------------------------------

// Задание 8

// Написать функцию, которая принимает массив (array) и число (num).
// Функция должна создать новый массив из элементов массива array, и в этом
// новом массиве должны содержаться только элементы, больше и равные (>=) значению num.

const addNewArray = (array, num) => {
  let newArray = [];
  for (let item of array) {
    if (item >= num) {
      newArray.push(item);
    }
  }
  return newArray;
};

console.log(addNewArray([1, 2, 3, 4, 6, 3, 2, 7], 5));

//----------------------------------------------------------------------------------------

// Задание 9

// Существует массив пользователей, например:

const users = [
  { name: 'Vasya', age: 23 },
  { name: 'Olya', age: 12 },
  { name: 'Anna', age: 22 },
  { name: 'Alex', age: 18 },
  { name: 'Valery', age: 8 },
];

// Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.

for (let item of users) {
  if (item.age > 15) {
    console.log(`Пользователь ${item.name} возраст ${item.age}`);
  }
}

//----------------------------------------------------------------------------------------

// Задание 10*

// Задать массив слов. Например:

let vegetables = ['морковь', 'баклажан', 'репа', 'топинамбур'];

// 1) В цикле сформировать массив объектов с ключами word (само слово),
// length (длина слова):

// [{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]

// Вывести этот массив в консоль.

let newVegetables = [];

for (let items = 0; items < vegetables.length; items++) {
  newVegetables.push({
    word: vegetables[items],
    length: vegetables[items].length,
  });
}

console.log(newVegetables);

for (let element = 0; element < newVegetables.length; element++) {
  console.log(`${newVegetables[element].word} - ${newVegetables[element].length}`);
}

// Подсказка: длину строки можно определить с помощью метода .length.
// Например, для переменной let string = 'text' это будет
// string.length (результат - 4, т.к. слово text состоит из 4 символов)

// 2) Пройтись по полученному массиву объектов и вывести в
// консоль строки вида "слово - длина_слова", например "картошка - 8"
