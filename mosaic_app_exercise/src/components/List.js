import React, { Component } from 'react';
import Loading from './Loading';
import Table from './Table';
import {getTopHeadlines} from '../api/api';
import SearchBar from "./SearchBar";

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading:false,
            news: null,
            error: null,
            page: 1,
            lastCall: getTopHeadlines,
            searchedWord: ""
        };
        this.handleNextPage = this.handleNextPage.bind(this);
        this.handlePrevPage = this.handlePrevPage.bind(this);
    }

    async componentDidMount(){
        const {page} = this.state;
        this.setState({isLoading: true});
        try{
            const topHeadlines = await getTopHeadlines(page);
            this.setState({news: topHeadlines, isLoading: false});
        }catch(error){
            this.setState({error, isLoading: false});
        }
    }

    async handleNextPage(e){
        e.preventDefault();
        const {page, lastCall, searchedWord} = this.state;
        this.setState({isLoading: true});
        try{
            const news = await lastCall(page+1);
            this.setState({news: news, isLoading: false});
            this.setState({page: page + 1});
        }catch(error){
            this.setState({error, isLoading: false});
        }

    }

    async handlePrevPage(e){
        e.preventDefault();
        const {page, lastCall, lastOrder} = this.state;
        if(page !== 1){
            this.setState({isLoading: true});
            try{
                const news = await lastCall(page-1, lastOrder);
                this.setState({news: news, isLoading: false});
                this.setState({page: page - 1});
            }catch(error){
                this.setState({error, isLoading: false});
            }

        }

    }

    render(){
        const {news, isLoading, error, page} = this.state;
        if(error){
            return (<div> ERROR </div>);
        }
        if(isLoading) return (<Loading message="Loading News..."/>);
        return (<React.Fragment>
            <div className="container">
                {news ? <SearchBar textSubmitted={this.handleTextSubmit}></SearchBar> : null}
                {news ? <Table dataNews={news.articles} page={page} nextPage={this.handleNextPage} prevPage={this.handlePrevPage}></Table> : null}
            </div>
        </React.Fragment>);
    }
}
export default List;