import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import InputAutoComplete from './InputAutoComplete';
import DisplayResults from './DisplayResults';


function mapStateToProps(state) {
    return {
        example: state.input.example
    }
}

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
    }

    render() {
    const { example } = this.props;
        return (
            <div className='container'>
                <div style={{margin: "auto"}}>
                    <img src='./img/logo.png' height="100px"/>
                </div>
                <InputAutoComplete />
                <DisplayResults />
            </div>
            )
    }
}

export default connect(mapStateToProps)(Home);
