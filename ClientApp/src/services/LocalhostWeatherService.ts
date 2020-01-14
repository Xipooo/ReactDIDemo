import 'reflect-metadata';
import { IWeatherService } from "./IWeatherService";
import { injectable } from "inversify";

@injectable()
export class LocalhostWeatherService implements IWeatherService {
    getWeather(): Promise<Response> {
        return fetch(`weatherforecast`);
    }
}