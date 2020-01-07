import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => { // using onFormSubmit(event) {} will make error
        event.preventDefault();

        this.props.onSubmit(this.state.term);   // ref to this props
    }

    render() {
        return (
            <div className="ui segment">
                {/* <form onSubmit={(event) => this.onFormSubmit()} className="ui form"> */}
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} //.toUpperCase()
                            placeholder="Text"
                        />
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;