const delay = (ms, number)=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(number)
    }, ms)
  })
}


delay(1000,5).then((num)=>{
   return num*50
}).then((num)=>{
  return delay(2000, num)
}).then((result)=>{
  console.log(result)
})
