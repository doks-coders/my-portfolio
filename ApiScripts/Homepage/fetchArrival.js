import React from 'react'



const fetchArrival = async () => {
  
    const res = await fetch('http://hallmartsapi.herokuapp.com/shop',
    {
    	method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })


    
let resJSon =  await  res.json()
console.log(resJSon)

    return resJSon
   

  
      

}

export default fetchArrival


function getvals(){
    return fetch('http://hallmartsapi.herokuapp.com/shop',
    {
    	method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch(error => console.warn(error));
  }
  
 // getvals().then(response => console.log(response));






/*
const res = await fetch('http://localhost:5000/tasks')

const res = await fetch(`http://localhost:5000/tasks/${id}`)

await fetch('http://localhost:5000/tasks',{method:'POST',headers:{'Content-type':'application/json'},body:JSON.stringify(task)})

const res =  await fetch(`http://localhost:5000/tasks/${id}`,{method:'PUT',headers:{'Content-type':'application/json'},body:JSON.stringify(updtask)})

await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
*/







