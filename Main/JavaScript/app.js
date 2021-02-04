//toggle burger menu function
const menuToggle = () => {
const toggleMenu = document.getElementById('burger');
 toggleMenu.addEventListener('click',function(){
 const sideMenu = document.querySelector('.sidebar');
 sideMenu.classList.toggle('hide-sidebar');
 
});
};
//hide menu function
const hideMenu = () => {
  const sideMenu = document.querySelector('.sidebar');
  sideMenu.classList.toggle('hide-sidebar');
};
//constants
const body = document.body;
const gray = document.querySelector('.gray');
const red = document.querySelector('.red');
const orange = document.querySelector('.orange');
const purple = document.querySelector('.purple');
const green = document.querySelector('.green');

//make gray
const makeGray = () =>{
  body.classList.remove('green');
  body.classList.add('gray');
  hideMenu();
}
gray.addEventListener('click', makeGray);

const makeRed = () =>{
  body.classList.remove('gray');
  body.classList.add('red');
  hideMenu();
}
red.addEventListener('click', makeRed);

const makeOrange = () =>{
  body.classList.remove('red');
  body.classList.add('orange');
  hideMenu();
}
orange.addEventListener('click', makeOrange);

const makePurple = () =>{
  body.classList.remove('orange');
  body.classList.add('purple');
  hideMenu();
}
purple.addEventListener('click', makePurple);

const makeGreen = () =>{
  body.classList.remove('purple');
  body.classList.add('green');
  hideMenu();
}
green.addEventListener('click', makeGreen);

menuToggle();







 
 

 






