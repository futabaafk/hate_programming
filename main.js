const button = document.getElementById("btn1")
const usertext = document.getElementById('text')


const getUserName = async() =>{

const response = await fetch("https://jsonplaceholder.typicode.com/users")
 try{
   if(!response.ok){
    throw new Error(response.status)
   }
 }
 catch(error){
  // console.log(error.message)
  usertext.innerText = error.message

 }

 const user = await response.json()
 
 const res = user.forEach((element, index, array)=>{
     element.name
 })

 usertext.innerText = res


  
}
button.addEventListener('click', ()=>{
  getUserName()
})


