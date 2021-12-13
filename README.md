# Weather Forecast Application

## Description
Wheather Forecast Application provides real-time data of weather forecast in particual location of user's choice.
Application sets user's location as default place or London, UK if permission to user's location is denied. 
If there is no city name starting with given text (in whisperer), app does not show whisperer but a line of text with warning insted. In case the user tries to submit the form with city name that does not exists, error message appears. 

## Instalation, running
After cloning the repository, `npm instal`" command must be called to install the packages. 
Run the application with `npm start` command. 

## Browsers
Application supports Google Chrome, Firefox and Edge browsers (2021-12-13). It should be possible run application in Safari as well. 

## Components
Whole app is coded in JS using React framework. See description of React components below. Each React component (every component has its own .js file) has .css file of the same name. 

## React Components
### App.js
Root of the application - takes user's position or default (London, UK) and loads data. In case the user submits form with name that does not exists in .json file, error message is rendered as child of App.js

### ErrorMessage.js
Error message with close button 

### SearchForm.js
Form with Whisperer

### Whisperer.js
A list of city names that meet user's input in whisperer

### MenuItem.js
Item in whisperer list

### ForecastCards.js
Cards that contains a detail info about weather forecast in particular location for next 5 days

### Card.js
One card (one day) forecast
