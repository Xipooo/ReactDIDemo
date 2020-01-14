import 'reflect-metadata';
import { injectable } from "inversify";
import { IWeatherService } from './IWeatherService';

@injectable()
export class CachedWeatherService implements IWeatherService {
    private expiration: number = 10;
    private cachedData: any = undefined;
    private cachedTime: string = '';

    getWeather(): Promise<Response> {
        if (this.cachedData !== undefined && this.cachedTime !== '') {
            let age = (Date.now() - parseInt(this.cachedTime)) / 1000;
            if (age < this.expiration) {
                return Promise.resolve(new Response(new Blob([this.cachedData])));
            } else {
                this.cachedData = undefined;
                this.cachedTime = '';
            }
        }
        return fetch(`weatherforecast`).then(resp => {
            resp.clone().text().then(
                content => {
                    this.cachedData = content;
                    this.cachedTime = Date.now().toString();
                }
            );
            return resp;
        });
    }
}