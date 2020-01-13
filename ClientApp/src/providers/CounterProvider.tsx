import React from 'react';
import { CounterService } from '../services/CounterService';

const CounterContext = React.createContext<{ service: CounterService | null}>({service: null});

const CounterProvider: React.FunctionComponent<{ service: CounterService }> = (props) => {
    return (
        <CounterContext.Provider value={{service: props.service}}>
            {props.children}
        </CounterContext.Provider>
    )
}

export { CounterProvider, CounterContext }; 