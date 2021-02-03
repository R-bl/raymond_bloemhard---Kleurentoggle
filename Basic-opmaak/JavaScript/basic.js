 const toggleMenu = document.getElementById('burger');
 toggleMenu.addEventListener('click',function(){
 const sideMenu = document.querySelector('.sidebar');
 sideMenu.classList.toggle('hide-sidebar');
 });
 const colorBody = document.body;
 const colorGray = document.getElementById('item1');
 const colorRed = document.getElementById('item2');
 const colorOrange = document.getElementById('item3');
 const colorPurple = document.getElementById('item4');
 const colorGreen = document.getElementById('item5');

 const changeClassBlueBackground = function () {
    const bodyElement = document.body;
    bodyElement.classList.toggle("gray-background-color");
  };



    colorGray.addEventListener('click', function(){
        colorGray.classList.add('gray-background-color');
        const sideMenu = document.querySelector('.sidebar');
        sideMenu.classList.toggle('hide-sidebar');
        colorGray.classList.remove('gray-background-color');
        changeClassBlueBackground();
    });

    colorRed.addEventListener('click', function(){
        const bodyColor = document.body;
        bodyColor.classList.toggle('red-background-color');
        const sideMenu = document.querySelector('.sidebar');
        sideMenu.classList.toggle('hide-sidebar');
        colorRed.classList.remove('red-background-color');
    })
    colorOrange.addEventListener('click', function(){
        const bodyColor = document.body;
        bodyColor.classList.toggle('orange-background-color');
        const sideMenu = document.querySelector('.sidebar');
        sideMenu.classList.toggle('hide-sidebar');
        colorOrange.classList.remove('Orange-background-color');
    
    })
    colorPurple.addEventListener('click', function(){
        const bodyColor = document.body;
        bodyColor.classList.toggle('purple-background-color');
        const sideMenu = document.querySelector('.sidebar');
        sideMenu.classList.toggle('hide-sidebar');
        colorPurple.classList.remove('purple-background-color');
    
    })
    colorGreen.addEventListener('click', function(){
        const bodyColor = document.body;
        bodyColor.classList.toggle('green-background-color');
        const sideMenu = document.querySelector('.sidebar');
        sideMenu.classList.toggle('hide-sidebar');
        colorGreen.classList.remove('green-background-color');
    
    })
 



