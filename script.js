

// // if (num < 49) {
// //     console.log('Неверно!')
    
// // } else if (num > 100) {
// //     console.log("Много!")
    
// // } else {
// //     console.log('Верно!')
    
// // };

// // (num == 50) ? console.log('Верно!') : console.log('Неверно!');

// // switch (num) {
// //     case num < 49:
// //         console.log('Неверно!');
// //         break;
// //     case num > 100:
// //         console.log("Много!");
// //         break;
// //     case num > 80:
// //         console.log("Все еще много!");
// //         break;
// //     case 50:
// //         console.log("Верно!");
// //         break;
// //     default:
// //         console.log("Что-то пошло не так!");
// //         break;
// // }


// // let num = 50;
// // // while (num < 55) {
// // //     console.log(num);
// // //     num++;
    
// // // }

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);

// // for (let i = 1; i < 8; i++) {
// //     if (i == 6) {
// //         continue
// //     }
// //     console.log(i)
    
// // }

// // let num = 20;
// // function showFirstMessage(text) {
// //     alert (text);
// //     let num = 10;
// //     console.log(num);
    
// // }

// // showFirstMessage("Hello world!");
// // console.log(num);


// // let calc = function (a,b) {
// //     return (a + b);
// // }

// let calc = (a,b) => a+b

// console.log(calc(3,4));

// console.log(calc(8,4));

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);


// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";

// // console.log(Math.round(twelve));

// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));


function first() {
    // что-то делаем
    setTimeout (function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
    
}

first();
second();

function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

function done() {
    console.log("Я прошел третий урок")
}

learnJS("Javascript", done);