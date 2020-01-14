import 'reflect-metadata';
import { Container } from 'inversify';
import { CounterService } from './services/CounterService';
import { CachedWeatherService } from './services/CachedWeatherService';

const TYPES = {
    IWeatherService: Symbol.for("IWeatherService")
}

let container = new Container();
container.bind(CounterService).toSelf().inSingletonScope();
container.bind(TYPES.IWeatherService).to(CachedWeatherService).inSingletonScope();
export { container, TYPES };