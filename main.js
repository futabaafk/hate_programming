const enteredpassword = "1234"

const promise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        if(enteredpassword=="qwerty"){

            resolve("Доступ разрешен")
        }
        else{

            reject("доступ отклонен")
        }
    }, 1000)
})



promise
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })

console.log("wtf")