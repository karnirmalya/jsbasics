
//   const now = new Date();
//   const timeString = now.toLocaleTimeString();
//   document.getElementById('clock').textContent = timeString;


// setInterval(updateClock, 1000);



const clock = document.querySelector('#clock')


setInterval(function()  {
    let date=new Date()
    clock.innerHTML = date.toLocaleTimeString() 
}, 1000);

