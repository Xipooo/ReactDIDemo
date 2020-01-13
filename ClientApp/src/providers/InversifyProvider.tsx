import React from 'react';
import { CounterService } from '../services/CounterService';

const DIContext = React.createContext<{ service: CounterService | null}>({service: null});

const InversifyProvider: React.FunctionComponent<{ service: CounterService }> = (props) => {
    return (
        <DIContext.Provider value={{service: props.service}}>
            {props.children}
        </DIContext.Provider>
    )
}

export { InversifyProvider, DIContext }; 