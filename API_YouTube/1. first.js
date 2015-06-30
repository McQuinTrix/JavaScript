var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/", false);
//This sends request
xhr.send();

console.log(xhr.status);//Will show 200
console.log(xhr.statusText);//Will show OK
