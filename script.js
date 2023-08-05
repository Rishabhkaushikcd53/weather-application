const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ff3e069acamshc6751f0da819bdep1faea7jsnf22dd5552d0c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
  
     console.log(response)

     cloud_pct.innerHTML=response.cloud_pct
     temp.innerHTML=response.temp
     feels_like.innerHTML=response.feels_like
     Humidity.innerHTML=response.Humidity
     min_temp.innerHTML=response.min_temp
     max_temp.innerHTML=response.max_temp
     wind_speed.innerHTML=response.wind_speed
     wind_degrees.innerHTML=response.wind_degrees
     sunrise.innerHTML=response.sunrise
     sunset.innerHTML=response.sunset


} catch (error) 

{
	

    console.error(error);
}
