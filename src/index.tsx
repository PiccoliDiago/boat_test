import React from 'react';

import { StatusBar } from 'react-native';

import { Home } from './pages/Home';

export default function App() {

    return (
        <>
            <StatusBar
                backgroundColor="#111"
                barStyle="light-content"
                translucent
            />
            <Home />
        </>
    );
}