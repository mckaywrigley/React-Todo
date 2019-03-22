import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    };

    render() {
        return (
            <div className="searchBar">
                <form>
                    <input 
                        type="text"
                        value={this.props.searchText}
                        onChange={this.props.searchHandler}
                        name="searchText"
                        placeholder="Search Term"
                    />
                </form>
            </div>
        );
    };
};

export default SearchBar;