import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/index.js';
import { ConnectedDashboard } from './Dashboard';

export const Main = () => (
    <Provider store={store}>
        <div>
            {/*Dashboard Goes here!*/}
            <ConnectedDashboard/>
        </div>
    </Provider>
)