const order = (title) =>{
  const menu = ["margarite", "pepperony", "gayest"]
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(menu.includes(title)){
        resolve(`Pizza ${title} has gone`)
      }
      else{
        reject(new Error("no such a pizza"))
      }
    }, 2000)
    
  })
}

order("pepperony")
  .then((result)=>{console.log(result)})
  .catch((message)=>{console.log(message)})


order("borsh")
  .then((result)=>{console.log(result)})
  .catch((message)=>{console.log(message)})

console.log("Orders have accepted")



