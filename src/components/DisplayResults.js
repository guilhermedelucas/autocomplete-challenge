import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { paginateMore, paginateDown } from '../actions/inputAction';

import InputAutoComplete from './InputAutoComplete';


function mapStateToProps(state) {
    return {
        results: state.input.results,
        offset: state.input.offset,
        totalResults: state.input.totalResults,
        value: state.input.value
    }
}

class DisplayResults extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
    }

    paginateMore(){
        const { offset, value } = this.props
        this.props.dispatch(paginateMore(offset, value))

    }

    paginateDown(){
        const { offset, value } = this.props
        this.props.dispatch(paginateDown(offset, value))

    }

    render() {
    const { results, offset, totalResults } = this.props;
        return (
            <div>
                <div className="display-results text-center">
                    { results.map((item) => {
                        return (
                            <div className="display-card">
                                <h4>{item.name}</h4>
                                <a href={item.external_urls.spotify}><img src={ item.images.length > 0 ? item.images[0].url : "./img/placeholder.jpg" } className="display-image"/></a>
                            </div>)
                    })}
                </div>
                <div className="buttons-bottom">
                    { offset > 0 ? <button onClick={() => this.paginateDown()}>Back</button> : null }
                    { totalResults > 5 && offset + 6 <= totalResults ? <button onClick={() => this.paginateMore()}>Show more</button> : null }
                </div>
            </div>
            )
    }
}

export default connect(mapStateToProps)(DisplayResults);
