const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","<",">","?","/"];

let passOne = document.querySelector('.password');
let generateBtn = document.querySelector('.generator_btn');
let copyBtn = document.querySelector('.copy_password');
let themeBtn = document.querySelector('.theme_changer');
let lightIcon = document.querySelector('.light');
let nightIcon = document.querySelector('.night');
let circle = document.querySelector('.circle');
let container = document.querySelector('.container');
let title = document.querySelector('.title');

generateBtn.addEventListener('click', () => {
    const currentIndex = () =>  {
    return Math.floor(Math.random() * characters.length);
  }
  let passwordOne = '';
  for(let i = 0; i < 15; i++) {
      passwordOne += characters[currentIndex()]
  }
  passOne.textContent = passwordOne;

});

copyBtn.addEventListener('click', () => {
  let copyPassword = document.querySelector('.password').innerText;
  let newEl = document.createElement('textarea');
  document.body.appendChild(newEl);
  console.log(copyPassword);
  newEl.value = copyPassword;
  newEl.select();
  document.execCommand('copy');
  document.body.removeChild(newEl);
});


themeBtn.addEventListener('click', () => {
  if(lightIcon.style.display === 'block' && circle.classList.contains('circle')) {
    lightIcon.style.display = 'none';
    nightIcon.style.display = 'block';
    circle.classList.remove('circle');
    circle.classList.add('active');
    container.style.background = '#1F2937';
    title.style.color = '#fff';
    themeBtn.style.background = '#D1D5DB';
    
  } else {
    lightIcon.style.display = 'block';
    nightIcon.style.display = 'none';
    circle.classList.add('circle');
    container.style.background = '#ECFDF5';
    title.style.color = '#2B283A';
    themeBtn.style.background = '#FECDD3';
  }
});