import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {
    state = { videos: [] };  // if videos: null then function .lenght below can not be used

    onTermSubmit = async term => {   // use axios 0.18.0 instead of 0.19.0     // ref. npm install axios@0.18.1
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos.
            </div>
        );
    }
}

export default App;