const toggleMenu = document.getElementById('burger');
 toggleMenu.addEventListener('click',function(){
 const sideMenu = document.querySelector('.sidebar');
 sideMenu.classList.toggle('hide-sidebar');
 
});

const changeColors = () => {

}



const redBtn = document.getElementById('item2');

redBtn.addEventListener('click', function(){
  const setBody = document.body;
  setBody.classList.add('red-background-color');
  const sideMenu = document.querySelector('.sidebar');
  sideMenu.classList.toggle('hide-sidebar');
})

// const redBtn = document.getElementById('item3');

// redBtn.addEventListener('click', function(){
//   const setBody = document.body;
//   setBody.classList.add('orange-background-color');
//   const sideMenu = document.querySelector('.sidebar');
//   sideMenu.classList.toggle('hide-sidebar');
// })

// const redBtn = document.getElementById('item4');

// redBtn.addEventListener('click', function(){
//   const setBody = document.body;
//   setBody.classList.add('purple-background-color');
//   const sideMenu = document.querySelector('.sidebar');
//   sideMenu.classList.toggle('hide-sidebar');
// })

// const redBtn = document.getElementById('item5');

// redBtn.addEventListener('click', function(){
//   const setBody = document.body;
//   setBody.classList.add('green-background-color');
//   const sideMenu = document.querySelector('.sidebar');
//   sideMenu.classList.toggle('hide-sidebar');
// })
 
 

 






