import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'; 
import Spinner from './Spinner';


class App extends React.Component {
    // constructor(props) { // js function to create new instance in a function, initialize state in this condition
    //     super(props);  // make sure all functions from react.compoent get called

    //     this.state = { lat: null, errorMessage: '' }; // lat aka latitude

    // }
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }), // not use this.state.lat = position.coords.latitude 
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request"/>;
    }

    // React says we have to define render!!
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

// ReactDOM.render(
//     <App />,
//     document.querySelector('#root')
// );