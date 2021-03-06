import React from 'react';
import logo from '../logo.svg';

const Page3 = ({onRouteChange}) => {

    return (
        <div    className="App">
            <header className="App-header">
                <img src={logo} alt="" className="App-logo"/>
                <h1 className="App-title">Page 3</h1>
            </header>

            <button onClick={() => onRouteChange('page1')}>Page 1</button>
            <button onClick={() => onRouteChange('page2')}>Page 2</button>

        </div>
    );
};

export default Page3;