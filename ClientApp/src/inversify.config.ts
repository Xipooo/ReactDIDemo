import 'reflect-metadata';
import { Container } from 'inversify';
import { CounterService } from './services/CounterService';
import { CachedWeatherService } from './services/CachedWeatherService';

let container = new Container();
container.bind(CounterService).toSelf().inSingletonScope();
container.bind(CachedWeatherService).toSelf().inSingletonScope();
export { container };