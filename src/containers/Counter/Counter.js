import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl
                    label="Increment"
                    clicked={this.props.onIncrementCounter}
                />
                <CounterControl
                    label="Decrement"
                    clicked={this.props.onDecrementCounter}
                />
                <CounterControl
                    label="Add 10"
                    clicked={this.props.onAddCounter}
                />
                <CounterControl
                    label="Subtract 15"
                    clicked={this.props.onSubtractCounter}
                />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li
                            key={strResult.id}
                            onClick={() =>
                                this.props.onDeleteResult(strResult.id)
                            }
                        >
                            {strResult.value}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter, // Give me the value of the counter in global state, managed by redux - and give it to me in the form of a prop named ctr which I can use in this component
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 10 }),
        onSubtractCounter: () =>
            dispatch({ type: actionTypes.SUBTRACT, val: 15 }),
        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onDeleteResult: id =>
            dispatch({ type: 'DELETE_RESULT', resultElId: id })
    };
};

// connect is a fn that returns a fn
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
