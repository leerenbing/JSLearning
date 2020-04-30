let myHeading =document.querySelector("h1");
myHeading.textContent ='Hello World';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/me.png') {
      myImage.setAttribute('src', 'images/IMG_20200330_152306.jpg');
    } else {
      myImage.setAttribute('src', 'images/IMG_20200323_200207.jpg');
    }
}
