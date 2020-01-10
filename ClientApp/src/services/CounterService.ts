import { injectable } from 'inversify';

@injectable()
export class CounterService {
    public count: number = 0;
    public increment(): void {
        this.count++;
    }
}