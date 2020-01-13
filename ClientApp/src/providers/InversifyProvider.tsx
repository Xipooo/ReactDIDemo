import { Container } from 'inversify';
import React from 'react';

const DIContext = React.createContext<{ container: Container | null}>({container: null});

const InversifyProvider: React.FunctionComponent<{ container: Container }> = (props) => {
    return (
        <DIContext.Provider value={{container: props.container}}>
            {props.children}
        </DIContext.Provider>
    )
}

export { InversifyProvider, DIContext }; 