/* Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8 */
const getMaxNumber = function(arr) {
    let maxNumber = Math.max(...arr);
    return maxNumber;
  };

 
  /* Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл */
  const getPow = function(number, n) {
    let result = number;
    for (let i = 1; i < n; i++) {
       result = result * number;
      }
    return result;
  }
  

  /* Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі); */
  const capitalizeFirstLetter = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  

  /* Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5 */
  const randomNumber = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

 
/*   Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4 */
  const countLetter = function(str, letter) {
   let result = 0;
   let lowerCaseString = str.toLowerCase();
   for (let i = 0; i < lowerCaseString.length; i++) 
   {
      if (lowerCaseString.charAt(i) == letter) 
        {
        result = result + 1;
        }
    }
    return result;
  }


 /*  Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl" */
 const deleteLetters = function(str) {
    let result = str.toLowerCase();
    
    return result.replace(/g/g, '');
 }



 document.writeln(`Функція №1: ${getMaxNumber([10,3,8,1,22])}`+"<br>");
 document.writeln(`Функція №2: ${getPow(2, 4)}`+"<br>");
 document.writeln(`Функція №3: ${capitalizeFirstLetter('cuRsor edUCation')}`+"<br>");
 document.writeln(`Функція №4: ${randomNumber(10, 20)}`+"<br>");
 document.writeln(`Функція №5: ${countLetter('cUrsor edUcatIon', 'u')}`+"<br>");
 document.writeln(`Функція №6: ${deleteLetters('Google')}`);