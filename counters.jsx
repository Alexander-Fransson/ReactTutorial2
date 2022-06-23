import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 

        const {onDelete,onIncrement,onReset} = this.props;

        return (<div> 
            <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>
                Reset
            </button>
            {this.props.counters.map(counter => <Counter 
                key={counter.id} 
                counter={counter}
                onDelete={onDelete} 
                onIncrement={onIncrement}
                onReset={onReset}
            />)}
        </div>);
    }
}
 
export default Counters;