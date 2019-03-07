


var fetch = require('node-fetch');

// var url = "https://api-v3.mbta.com/vehicles?api_key=ca34f7b7ac8a445287cab52fb451030a&filter[route]=1&include=trip";
var url = 'https://api-v3.mbta.com/vehicles?api_key=57f6987635c345cfbb1c50cc0ddc32e5&filter[route]=1&include=trip';


var makeCall = function(){

    fetch (url)
    .then(function(response){return response.json();})
    .then(function(json){console.log(json)})
     
     }
	
    
	setInterval(makeCall,15000)