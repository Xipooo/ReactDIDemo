import 'reflect-metadata';
import { Container } from 'inversify';
import { CounterService } from './services/CounterService';

let container = new Container();
container.bind(CounterService).toSelf();
export { container };