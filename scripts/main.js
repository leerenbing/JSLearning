let myHeading =document.querySelector("h1");
myHeading.textContent ='Hello World';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    alert('onclick');
    if(mySrc === 'images/me.png') {
      myImage.setAttribute('src', 'images/IMG_20200330_152306.jpg');
    } else {
      myImage.setAttribute('src', 'images/IMG_20200323_200207.jpg');
    }
}

const para = document.querySelector('.p1');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('输入一个新的名字：');
  para.textContent = 'player1：' + name;
}
