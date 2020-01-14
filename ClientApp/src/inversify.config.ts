import 'reflect-metadata';
import { Container } from 'inversify';
import { CounterService } from './services/CounterService';
import { LocalhostWeatherService } from './services/LocalhostWeatherService';

const TYPES = {
    IWeatherService: Symbol.for("IWeatherService")
}

let container = new Container();
container.bind(CounterService).toSelf().inSingletonScope();
container.bind(TYPES.IWeatherService).to(LocalhostWeatherService).inSingletonScope();
export { container, TYPES };