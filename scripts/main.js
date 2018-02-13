var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/shinobu-smirking.jpg') {
        myImage.setAttribute ('src', 'images/shinobu-laughing.gif');
    } else {
        myImage.setAttribute ('src', 'images/shinobu-smirking.jpg');
    }
}

var myButton = document.querySelector('button');

var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Shinobu is kawaii, ' + myName + '!';
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Shinobu is kawaii, ' + storedName + '!';
}

myButton.onclick = function() {
    setUserName();
}