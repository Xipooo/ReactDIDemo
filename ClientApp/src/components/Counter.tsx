import * as React from 'react';
import { CounterService } from '../services/CounterService';
import { resolve } from 'inversify-react';

export default class Counter extends React.PureComponent<{}, { count: number }> {

    @resolve(CounterService)
    private _counterService: CounterService;

    constructor(props: any) {
        super(props);
        this.state = { count: 0 };
    }

    private onIncrement() {
        this._counterService.increment();
        this.setState({ count: this._counterService.count});
    }

    public render() {
        return (
            <React.Fragment>
                <h1>Counter</h1>

                <p>This is a simple example of a React component.</p>

                <p aria-live="polite">Current count: <strong>{this.state.count}</strong></p>

                <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => { this.onIncrement(); }}>
                    Increment
                </button>
            </React.Fragment>
        );
    }
};
