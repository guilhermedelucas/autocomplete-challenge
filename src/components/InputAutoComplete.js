import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { searchTyped, clickOnSuggestion, clearInputValue, enterKeyDown } from '../actions/inputAction';
import { Link } from 'react-router';


function mapStateToProps(state) {
    return {
        input: state.input.input,
        value: state.input.value,
        autoCompleteResult: state.input.autoCompleteResult,
        query: state.input.query
    }
}

class InputAutoComplete extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: null
        };
    }

    searchTyped(event) {
        this.props.dispatch(searchTyped(event.target.value))
    }

    keyEvent(event){
        if(this.state.counter < 0){
            this.setState({
                counter: null
            })
        }
        switch (event.key) {
            case "ArrowUp": {
                if (this.state.counter == null) {
                    const key = "suggestion" + 4
                    return (
                        this.setState({
                        [key]: true, counter: 4
                    })
                )
                } else {
                    const key = "suggestion" + (this.state.counter - 1);
                    const previous = "suggestion" + this.state.counter;
                    if (this.state.counter <= 0) {
                        return (
                            this.setState({
                                [key]: true,
                                [previous]: false,
                                counter: null

                            })
                        );
                    } else {
                        return (
                            this.setState({
                                [key]: true,
                                [previous]: false,
                                counter: this.state.counter - 1

                            })
                        );
                    }

                }
            }
            case "ArrowDown": {
                if (this.state.counter == null) {
                    const key = "suggestion" + 0
                    return (
                        this.setState({
                        [key]: true, counter: 0
                    })
                )
                } else {
                    const key = "suggestion" + (this.state.counter + 1);
                    const previous = "suggestion" + this.state.counter;
                    if (this.state.counter <= 4) {
                        return (
                            this.setState({
                                [key]: true,
                                [previous]: false,
                                counter: this.state.counter + 1

                            })
                        );
                    } else {
                        return (
                            this.setState({
                                [key]: true,
                                [previous]: false,
                                counter: null

                            })
                        );
                    }

                }
            }
            case "Enter": {
                const index = this.state.counter;
                console.log(this.props.query);
                if (!this.props.autoCompleteResult[index]) {
                    let query = this.props.query
                    return (
                        this.props.dispatch(enterKeyDown(query))
                    );
                } else {
                    let query = this.props.autoCompleteResult[index].name;
                    return (
                        this.props.dispatch(enterKeyDown(query))
                    );
                }
            } default: {
                this.props.dispatch(clearInputValue())
            }
        }
    }

    clickOnSuggestion(artist) {
        this.props.dispatch(clickOnSuggestion(artist))
    }

    clearInputValue(){
        this.props.dispatch(clearInputValue())
    }

    hoverSuggestion(index){
        const key = "suggestion" + index
        this.setState({
            [key]: true,
            counter: index
        })
    }

    unhoverSuggestion(index){
        const key = "suggestion" + index
        const previous = "suggestion" + this.state.counter
        this.setState({
            [key]: false,
            [previous]: false,
            counter: index
        })
    }

    render() {
        console.log(this.state.counter);
        const { input, autoCompleteResult, value } = this.props;
        return (
            <div className="search-bar">
                <div className="input-bar">
                    <input type="text" className="search-input" value={value} onChange={() => this.searchTyped(event)} onFocus={() => this.clearInputValue()} onKeyDown={() => this.keyEvent(event)}/>
                    <span className="glyphicon glyphicon-search"></span>
                </div>
                <div className="search-autocomplete-results">
                { this.props.input ? autoCompleteResult.map((item, index) => {
                    return (<div className={ this.state["suggestion" + index] ? "search-suggestion-active"  : "search-suggestion" } onClick={() => this.clickOnSuggestion(item.name)} onMouseOver={() => this.hoverSuggestion(index)} onMouseLeave={() => this.unhoverSuggestion(index)}>{item.name}</div>)
                }) : null
                }
                </div>
            </div>
            )
    }
}

export default connect(mapStateToProps)(InputAutoComplete);
