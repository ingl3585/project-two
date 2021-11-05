# Project Overview

## Project Links

- [GitHub Repo](https://github.com/ingl3585/project-two)
- [Deployment Link](https://ingl3585.github.io/weather-app/)

## Project Description

Here is a new weather app that will provide more then enough information to satisfy any weather need. This app will let the user search for any city within the US and give the current temperature, high and low temperature for the day, conditions, etc. In addition to that, it will also generate a 5 day forecast and an option to favorite locations so the user does not need to search for their favorite cities. Also for a little extra, moon phases, and sunrise/sunset times will also be implemented. A hopeful functionality will include a weather radar around your current location (given that there is free current radar data available).

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 

I am choosing the Weatherbit API as it is free and easily accessible. 


```
 {  
  "data":[  
    {  
        "wind_cdir":"NE",
        "rh":59,
        "pod":"d",
        "lon":"-78.63861",
        "pres":1006.6,
        "timezone":"America\/New_York",
        "ob_time":"2017-08-28 16:45",
        "country_code":"US",
        "clouds":75,
        "vis":10,
        "wind_spd":6.17,
        "wind_cdir_full":"northeast",
        "app_temp":24.25,
        "state_code":"NC",
        "ts":1503936000,
        "h_angle":0,
        "dewpt":15.65,
        "weather":{  
          "icon":"c03d",
          "code": 803,
          "description":"Broken clouds"
        },
        "uv":2,
        "aqi":45,
        "station":"CMVN7",
        "wind_dir":50,
        "elev_angle":63,
        "datetime":"2017-08-28:17",
        "precip":0,
        "ghi":444.4,
        "dni":500,
        "dhi":120,
        "solar_rad":350,
        "city_name":"Raleigh",
        "sunrise":"10:44",
        "sunset":"23:47",
        "temp":24.19,
        "lat":"35.7721",
        "slp":1022.2
    }
  ],
  "minutely":[ ... ],
  "count":1
}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile/Tablet/Desktop Wireframe](https://imgur.com/2u310kg)
- [React Architecture](https://imgur.com/zVFztYU)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Search functionality
- Current weather and icons
- Five day weather forecast section
- Moon information
- Social icons
- CSS styling

#### PostMVP EXAMPLE

- Favorites functionality
- Weather radar
- Contact me form
- Text and general animations

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Nav | favorites functionality | 
| Weather | This will render the search/current weather/moon info/weather forecast sections |
| IconCredits | This will render the icon credits section |
| ContactMe | This will render the contact me section |  
| Footer | This will render the footer section | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evaluate game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Search Bar | H | 3hrs| 2hrs | 2hrs |
| Favorites | M/L | 4hrs| 2hrs | 2hrs |
| Current Weather | H | 3hrs| 2hrs | 2hrs |
| Weather Forecast | H | 4hrs| 2hrs | 2hrs |
| Moon Info | H | 3hrs| 2hrs | 2hrs |
| Contact Me Form | L | 3hrs| 2hrs | 2hrs |
| Social Icons | M | 0.5hrs| 0.25hrs | 0.25hrs |
| General Layout | H | 4hrs| 6hrs | 6hrs |
| General CSS Styling | H | 6hrs| 6hrs | 6hrs |
| Animations | L | 4hrs| 2hrs | 2hrs |
| Total | - | 34.5hrs| 26.25 hrs | 26.25 hrs |

## Additional Libraries
N/A

## Code Snippet
Placeholder forecast for when the user loads into the page.

```
useEffect(() => {
		let cityState = 'New York';
		let units = 'I';
		let days = '6';
		const key = 'f14fde324cf84653bcad1ab6ca1816e8';
		const currentWeatherUrl = `https://api.weatherbit.io/v2.0/current?&key=${key}&city=${cityState}&units=${units}`;
		const forecastWeatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?&key=${key}&city=${cityState}&days=${days}&units=${units}`;

		const makeApiCallOne = (currentWeatherUrl) => {
			return fetch(currentWeatherUrl)
				.then((response) => response.json())
				.then((data) => setCurrentWeather(data.data[0]));
		};
		makeApiCallOne(currentWeatherUrl);
		const makeApiCallTwo = (forecastWeatherUrl) => {
			return fetch(forecastWeatherUrl)
				.then((response) => response.json())
				.then((data) => setWeatherForecast(data));
		};
		makeApiCallTwo(forecastWeatherUrl);
	}, []);
```
