 const toggleMenu = document.getElementById('burger');

 toggleMenu.addEventListener('click',function(){

     const sideMenu = document.querySelector('.sidebar');

     sideMenu.classList.toggle('hide-sidebar');
 })


