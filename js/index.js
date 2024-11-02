// 1 завднання

const oneString = prompt("ведіть тест");
const twoString = prompt("ведіть тест")

if (oneString === "" || twoString === ""){
    alert("Не всі поля заповнені")
} else {
    alert("Обидва поля заповнені")
}

// 2 завднання

const stingNumberone = Number(prompt("ведіть число"));
const stingNumbertwo = Number(prompt("ведіть число"));

if (stingNumberone + stingNumbertwo < 10){
    alert("Сума менша або дорівнює 10")
} else {
    alert("Сума більша за 10")
}

// 3 завдання

const string = prompt("як поіншому можна назвати мову програмування ECMAScript");

if (string === "JavaScript") {
    alert("Текст містить слово JavaScript")
} else {
    alert( "Текст не містить слово JavaScript")
}

// 4 завдання

const stingNumber = prompt("ведіть число")

if (stingNumber > 10 && stingNumber < 20){
    alert("Число входить в діапазон від 10 до 20")
} else {
    alert("Число не входить в діапазон від 10 до 20")
}

// 5 завдання

const email = prompt("ведіть свій емаіл")

if (email === '@' && email === "."){
    alert('вірно')
} else {
    alert("не вірно")
}

const password = prompt("ведіть пароль (jsfd123)")

if (password === "jsfd123") {
    alert("перейдіть сюди https://rozetka.com.ua/")
} else {
    alert("помилка")
}