var button_event = document.getElementsByClassName('button')

button_event = document.addEventListener('click',function(){
  var mycity = document.getElementById('user_input').value

  var request = new XMLHttpRequest()
  
  //newcity =[].map.call( mycity, function(node){
  //  return node.textContent || node.innerText || "";
  //  }).join("");
  newcity = String(mycity)
  console.log(newcity)

  request.open('GET', 'https://api.weatherbit.io/v2.0/current?key=affa9b5b12be47c0b41e977da0af6462'+'&'+'city='+newcity, true)
  //request.setRequestHeader("city",mycity)
  request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    const app = document.getElementById('root')
    var all = data.data[0]

    console.log(all.timezone)
    console.log(all.weather.description)
    console.log(all.temp)
    
   var mainz = document.getElementById('card-header')
   mainz.textContent = all.city_name

   var desc = document.getElementById('card-description')
   desc.textContent = all.weather.description

  var titl =document.getElementById('card-text')
  titl.textContent = all.timezone

  var mytim = document.getElementById('card-text2')
  mytim.textContent = all.ob_time

  var mytemp = document.getElementById('card-text3')
  mytemp.textContent = all.temp +' F'
 var myimg = document.getElementById('card-body')

 var newimg = document.createElement('img')
 newimg.src = 'icons/'+ all.weather.icon +'.png'
 myimg.appendChild(newimg)

  } else {
    console.log('error')
  }
}

request.send(button_event)
  })

