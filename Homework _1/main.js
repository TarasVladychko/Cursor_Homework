"use strict"

const APPLES = 15.678;
const ORANGES = 123.965;
const PEARS = 90.2345;


//Використовуючи вбудований об'єкт Math – виведіть максимальне число

const MAX_PRICE = Math.max(APPLES, ORANGES, PEARS);
console.log(MAX_PRICE);

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число

const MIN_PRICE = Math.min(APPLES, ORANGES, PEARS);
console.log(MIN_PRICE);

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму

const TOTAL_SUM = APPLES + ORANGES + PEARS;
console.log(TOTAL_SUM);

//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.

const INT_SUM = (Math.floor(APPLES) + Math.floor(ORANGES) + Math.floor(PEARS));
console.log(INT_SUM);

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)

const ROUND_VALUE = Math.round(TOTAL_SUM / 100) * 100;
console.log(ROUND_VALUE);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?

const ROUND_SUM = Math.floor(TOTAL_SUM);
console.log(ROUND_SUM % 2 === 0);

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.

const CASH = 500;
const CHANGE = CASH - TOTAL_SUM;
console.log(CHANGE);

//Виведіть середнє значення цін, округлене до другого знаку після коми

const AVERAGE_PRICE = (TOTAL_SUM / 3).toFixed(2);
console.log(AVERAGE_PRICE);

//(Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).

const DISCOUNT = Math.floor(Math.random() * 100) + 1;
console.log(DISCOUNT + "%");

//Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.

const CLIENT_SUM = (TOTAL_SUM - TOTAL_SUM * DISCOUNT / 100).toFixed(2);
console.log(CLIENT_SUM);

//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?

const COST_PRICE = TOTAL_SUM / 2;
const SALE_PRICE = TOTAL_SUM * DISCOUNT / 100;
const NET_PROFIT = (COST_PRICE - SALE_PRICE).toFixed(2);
console.log(NET_PROFIT);



console.log(`Максимальна ціна: ${MAX_PRICE}`);
console.log(`Мінімальна ціна: ${MIN_PRICE}`);
console.log(`Вартість всіх товарів: ${TOTAL_SUM}`);
console.log(`Ціла частина вартості товарів: ${INT_SUM}`);
console.log(`Сума товарів округлена до сотень: ${ROUND_VALUE}`);
console.log(`Парне чи непарне число: ${ROUND_SUM}`);
console.log(`Сума решти: ${CHANGE}`);
console.log(`Середнє значення цін: ${AVERAGE_PRICE}`);
console.log(`Випадкова знижка: ${DISCOUNT}%`);
console.log(`Сума до оплати з випадковою знижкою: ${CLIENT_SUM}`);
console.log(`Чистий прибуток: ${NET_PROFIT}`);