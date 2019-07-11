import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter // Give me the value of the counter in global state, managed by redux - and give it to me in the form ofa prop named ctr which I can use in this component
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddCounter: () => dispatch({ type: 'ADD', val: 10 }),
        onSubtractCounter: () => dispatch({ type: 'SUBTRACT', val: 15 })
    };
};

// connect is a fn that returns a fn
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
