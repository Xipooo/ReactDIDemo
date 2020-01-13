import React, { useState } from 'react';
import { CounterContext } from '../providers/CounterProvider';

const Counter: React.FunctionComponent = () => {
    const { service } = React.useContext(CounterContext);
    const [count, setCount] = useState(service ? service.count : 0);

    return (
        <React.Fragment>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p aria-live="polite">Current count: <strong>{count}</strong></p>

            <button type="button"
                className="btn btn-primary btn-lg"
                onClick={() => {
                    if (service) {
                        service.increment();
                        setCount(service.count);
                    }
                }}>
                Increment
            </button>
        </React.Fragment>
    );
};

export default Counter;