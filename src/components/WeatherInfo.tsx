import React from 'react';
import './WeatherInfo.css';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}

interface WeatherInfoProps {
  weatherData: WeatherData;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weatherData }) => {
  return (
    <div className="weather-info">
      <h2>{weatherData.name}</h2>
      <div className="weather-main">
        <img 
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
          alt={weatherData.weather[0].description}
          className="weather-icon"
        />
        <div className="temperature">{Math.round(weatherData.main.temp)}°C</div>
      </div>
      <div className="weather-description">{weatherData.weather[0].description}</div>
      <div className="weather-details">
        <div className="detail">
          <span className="label">Humidity:</span>
          <span className="value">{weatherData.main.humidity}%</span>
        </div>
        <div className="detail">
          <span className="label">Wind Speed:</span>
          <span className="value">{weatherData.wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;