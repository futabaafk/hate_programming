// const enteredpassword = "1234"

// const promise = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         if(enteredpassword=="qwerty"){

//             resolve("Доступ разрешен")
//         }
//         else{

//             reject("доступ отклонен")
//         }
//     }, 1000)
// })



// promise
//     .then((result)=>{
//         console.log(result)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })

// console.log("wtf")


// Напиши функцию получитьПользователя, которая возвращает промис. 
// Через 2 секунды промис должен выдать объект пользователя.

// Требования:

// Функция возвращает new Promise(...).
// Внутри через setTimeout на 2000 мс вызывается resolve с объектом:
// { имя: "Алекс", возраст: 25 }
// Вызови функцию и через .then выведи в консоль строку:
// Привет, Алекс! Тебе 25 лет. (имя и возраст бери из объекта, не пиши вручную).
// После вызова функции (но вне .then) выведи в консоль Загружаю....

// const getUser = () =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve({ name: "Алекс", age: 25 })
//         })
//     }, 2000)
// }

// getUser()
//     .then((userdata)=>{
//         console.log(`hello ${userdata.name}! you are ${userdata.age}`)
//     })

// console.log("downloading...")



async function toDo(){
    setTimeout(()=>{
        console.log("wtf is going on")
    }, 2000)
}

await toDo()
