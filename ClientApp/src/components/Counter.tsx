import React, { useState } from 'react';
import { CounterService } from '../services/CounterService';
import { container } from '../inversify.config';

const Counter: React.FunctionComponent = () => {
    let _counterService = container.get(CounterService);
    const [count, setCount] = useState(_counterService.count);

    return (
        <React.Fragment>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p aria-live="polite">Current count: <strong>{count}</strong></p>

            <button type="button"
                className="btn btn-primary btn-lg"
                onClick={() => {
                    if (_counterService) {
                        _counterService.increment();
                        setCount(_counterService.count);
                    }
                }}>
                Increment
            </button>
        </React.Fragment>
    );
};

export default Counter;