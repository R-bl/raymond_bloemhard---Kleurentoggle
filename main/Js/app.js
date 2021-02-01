const burgerBtn = document.getElementById('btn-menu-toggle');

burgerBtn.addEventListener('click',function(){

    const colorMenu = document.getElementById('color-menu');

    colorMenu.classList.toggle('menu-hide');
})