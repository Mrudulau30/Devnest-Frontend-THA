var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function()
{
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&APPID=c8c840d23240a26942ad9c44e9f0e6a1')

.then(response=>response.json())
.then(data => {
  var nameValue=data['name'];
  var tempValue = data['main']['temp'];
  var descValue=['weather'][0]['description'];

 name.innerHTML=nameValue;
 temp.innerHTML=tempValue;
 desc.innerHTML=descValue;

})



.catch(err => alert("wrong city name!"))
})