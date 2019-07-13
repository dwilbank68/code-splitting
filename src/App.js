import React, { Component } from 'react';
import './App.css';
import Page1 from './components/Page1.jsx';
import AsyncComponent from './components/AsyncComponent.jsx';

class App extends Component {

    state = {
        component: null,
        route:'page1'
    }

    onRouteChange = route => {
        this.setState({route})
    }

    render() {
        if (this.state.route === 'page1') {
            return <Page1 onRouteChange={this.onRouteChange}/>
        }

        if (this.state.route === 'page2') {
            const AsyncPage2 = AsyncComponent(() => import('./components/Page2.jsx'))
            return <AsyncPage2 onRouteChange={this.onRouteChange}/>
        }

        if (this.state.route === 'page3') {
            const AsyncPage3 = AsyncComponent(() => import('./components/Page3.jsx'))
            return <AsyncPage3 onRouteChange={this.onRouteChange}/>
        }

        return <this.state.component onRouteChange={this.onRouteChange}/>

    }

}

export default App;


