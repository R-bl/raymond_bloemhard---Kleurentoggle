//constants
const body = document.body;
const gray = document.querySelector('.gray');
const red = document.querySelector('.red');
const orange = document.querySelector('.orange');
const purple = document.querySelector('.purple');
const green = document.querySelector('.green');


//toggle burger menu function
const menuToggle = () => {
const toggleMenu = document.getElementById('burger');
 toggleMenu.addEventListener('click',function(){
 const sideMenu = document.querySelector('.sidebar');
 sideMenu.classList.toggle('hide-sidebar');
 
});
};
// color text function
const getText = () => {
  const text = document.querySelector('.text-color');
  text.classList.toggle('hide-text');
}



//hide menu function
const hideMenu = () => {
  const sideMenu = document.querySelector('.sidebar');
  sideMenu.classList.toggle('hide-sidebar');
};


const makeGray = () =>{
  body.classList.remove('red','orange','purple','green');
  body.classList.add('gray');
  document.querySelector('.text-color').textContent = 'Gray';
  hideMenu();
  
}
gray.addEventListener('click', makeGray);


const makeRed = () =>{
  body.classList.remove('orange','purple','green','gray');
  body.classList.add('red');
  document.querySelector('.text-color').textContent = 'Red';
  hideMenu();
  
}
red.addEventListener('click', makeRed);


const makeOrange = () =>{
  body.classList.remove('purple','green','red','gray');
  body.classList.add('orange');
  document.querySelector('.text-color').textContent = 'Orange';
  hideMenu();
  
}
orange.addEventListener('click', makeOrange);

const makePurple = () =>{
  body.classList.remove('green','gray','red','orange');
  body.classList.add('purple');
  document.querySelector('.text-color').textContent = 'Purple';
  hideMenu();
  
}
purple.addEventListener('click', makePurple);

const makeGreen = () =>{
  body.classList.remove('gray','red','orange','purple');
  body.classList.add('green');
  document.querySelector('.text-color').textContent = 'Green';
  hideMenu();
  
}
green.addEventListener('click', makeGreen);

menuToggle();
getText();







 
 

 






