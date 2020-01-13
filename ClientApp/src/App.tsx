import 'reflect-metadata';
import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import { Provider } from 'inversify-react';
import { container } from './inversify.config';
import './custom.css'
import { CounterProvider } from './providers/CounterProvider';
import { CounterService } from './services/CounterService';

const counterService: CounterService = new CounterService();

export default () => (
    <Provider container={container}>
        <CounterProvider service={counterService}>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
            </Layout>
        </CounterProvider>
    </Provider>
);
