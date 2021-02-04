const menuToggle = () => {
const toggleMenu = document.getElementById('burger');
 toggleMenu.addEventListener('click',function(){
 const sideMenu = document.querySelector('.sidebar');
 sideMenu.classList.toggle('hide-sidebar');
 
});
};
const hideMenu = () => {
  const sideMenu = document.querySelector('.sidebar');
  sideMenu.classList.toggle('hide-sidebar');
};

// const colorBtns = () =>{
//   const allBtns = document.getElementById('change-color');
//   allBtns.addEventListener('click', function(el, i){


//   })
// }
//Gray
const grayButton = () =>{
  const gray = document.querySelector('.gray');
  gray.addEventListener('click', function(){
    const myBody = document.body;
    myBody.classList.add('gray');
    hideMenu();
  });
};
//Red
const redButton = () =>{
  const red = document.querySelector('.red');
  red.addEventListener('click', function(){
    const myBody = document.body;
    myBody.classList.add('red');
    hideMenu();
  });
};
//orange
const orangeButton = () =>{
  const orange = document.querySelector('.orange');
  orange.addEventListener('click', function(){
    const myBody = document.body;
    myBody.classList.add('orange');
    hideMenu();
  });
};
//purple
const purpleButton = () =>{
  const purple = document.querySelector('.purple');
  purple.addEventListener('click', function(){
    const myBody = document.body;
    myBody.classList.add('purple');
    hideMenu();
  });
};
//green
const greenButton = () =>{
  const green = document.querySelector('.green');
  green.addEventListener('click', function(){
    const myBody = document.body;
    myBody.classList.add('green');
    hideMenu();
  });
};
menuToggle();
grayButton();
redButton();
orangeButton();
purpleButton();
greenButton();

// const changeClassBody = function (){
//   const bodyElement = document.body;
//   bodyElement.classList.add('green');
// };

// const attachEventGreenColor = function(){
//   const changeColorBtn = document.querySelectorAll('#change-color');
//   changeColorBtn.addEventListener('click', function(){
//     changeClassBody();
//   });
// };
// attachEventGreenColor();


// const changeColor = () => {
//   const gray = document.getElementById('gray');
//   const red = document.getElementById('red');
//   const orange = document.getElementById('orange');
//   const purple = document.getElementById('purple');
//   const green = document.getElementById('green');
//   gray
// }



 
 

 






