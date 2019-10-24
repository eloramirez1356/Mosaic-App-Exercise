import React, {Component} from 'react';
import Row from "./Row";
import PropTypes from 'prop-types';

class Table extends Component {
    constructor (props){
        super(props);
        this.state = {
            hasError:false
        }
    }

    render() {
        const {dataNews, nextPage, prevPage} = this.props;
        return (<div className="tableNews">
            <h1>News Table</h1>
            <table id="simple-board">
                <tbody>
                <tr id="row0">
                    <th>Primary Title</th>
                </tr>
                {
                    dataNews.map((news,i) => {
                        return (<Row key={i} data={news}/>)
                    })
                }
                </tbody>
            </table>
            <div className="buttons">
                <input type="button" onClick={prevPage} value="Prev" className="detail-button"/>
                <input type="button" onClick={nextPage} value="Next" className="detail-button"/>
            </div>

        </div>);
    }
}

Table.propTypes = {
    dataNews: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    nextPage: PropTypes.func.isRequired,
    prevPage: PropTypes.func.isRequired
};

export default Table;