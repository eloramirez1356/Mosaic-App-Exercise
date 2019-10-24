import React, { Component } from 'react';
import {getTopHeadlines} from "../api/api";
import PropTypes from 'prop-types';


class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: "",
            searchedWord: "",
            hasError: "",
            page: 1
        };
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange (field){
        return (event) => {
            this.setState({
                [field]: event.target.value
            })
        }
    }



    render() {
        const { showSending, hasError, searchedWord} = this.state;
        const {textSubmitted} = this.props;
        return (<div className="modal">
            <div className="modal-content">
                <h2>Search News</h2>
                    <label>Type words for searching news related to these topics</label>
                    <input type="text" value={searchedWord} onChange={this.handleTextChange("searchedWord")} minLength="3" maxLength="2000" required/>
                    <input type="submit" onClick={()=>{textSubmitted(searchedWord)}} value="Submit" disabled={showSending}/>
            </div>
        </div>);
    }
}

SearchBar.propTypes = {
    textSubmitted: PropTypes.func.isRequired
};

export default SearchBar;