import { WeatherForecastsState } from '../store/WeatherForecasts';

export interface IWeatherService {
    getWeather(): Promise<Response>;
}