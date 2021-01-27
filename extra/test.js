 const button = document.querySelector('.btnAlert');
 const blueBtn = document.querySelector('.blue-background')
 button.addEventListener('click', () => {
     button.textContent = 'button clicked';
 })
 blueBtn.addEventListener('click', () =>{
     blueBtn.classList.toggle('red-background');    
 });