var myImage = document.querySelector('img');

myImage.onclick = function()
{
var mySrc = myImage.getAttribute('src');
if(mySrc = 'images/Desert.jpg')
{
myImage.setAttribute('src', 'images/Hydrangeas.jpg');

}
else
{
myImage.setAttribute('src', 'images/Desert.jpg');
}
}

var myButton = document.querySelector('button');
var myHeading  = document.querySelector('h1');

function setUserName()
{
var myName = prompt("Please enter your name");
localStorage.setItem('name1', myName);
myHeading.textContent = 'Mozilla is cool, ' + myName;

}


if(!localStorage.getItem('name1'))
{
setUserName();
}
else
{
var storedName = localStorage.getItem('name1');
myHeading.textContent = 'Mozilla is coool ' + storedName;
}

myButton.onclick = function()
{
setUserName();
}