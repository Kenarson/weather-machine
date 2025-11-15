const api_key = "6bfb565e178764a45d12f27a89b2bfae";

export async function fetchWeatherData(city: string) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}