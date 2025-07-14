type CurrentWeather = {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  time: string;
}

type DailyWeather = {
  temperature_2m_min: number[];
  temperature_2m_max: number[];
  time: string[];
}

export type WeatherResponse = {
  current_weather: CurrentWeather;
  daily: DailyWeather;
}
