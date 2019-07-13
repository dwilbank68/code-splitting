import React, { Component } from 'react';
import './App.css';
import Page1 from './components/Page1.jsx';

class App extends Component {

    state = {
        component: null,
        route:'page1'
    }

    onRouteChange = route => {

        if (route === 'page1') this.setState({route});
        if (route === 'page2') {
            import('./components/Page2.jsx')
                .then(component => this.setState({route, component: component.default}));
                // the imported component will come across as a unmountable default obj,
                // unless you use component.default
        }
        if (route === 'page3') {
            import('./components/Page3.jsx')
                .then(component => this.setState({route, component: component.default}));
        }
    }

    render() {
        if (this.state.route === 'page1') {
            return <Page1 onRouteChange={this.onRouteChange}/>
        }
        return <this.state.component onRouteChange={this.onRouteChange}/>
    }

}

export default App;


