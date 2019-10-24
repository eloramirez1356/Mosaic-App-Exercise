import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Row extends Component {
    render() {
        const {data} = this.props;
        return (
            <tr id="row">
                <td id="cell1-0">{data.title}</td>
            </tr>
        );
    }
}

Row.propTypes = {
    data: PropTypes.object.isRequired
}

export default Row;