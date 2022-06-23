import React, { Component } from 'react';

class Counter extends Component {
    
    render() {
        return (
            <div>
                <span className={'badge bg-primary m-2'}>
                    {this.props.counter.value}
                </span>
                <button className='btn-xs' onClick={() => this.props.onIncrement(this.props.counter)}>
                    Increase
                </button>
                <button className="btn btn-danger m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>
                    Delete
                </button>
          </div>
        );
    }
}
 
export default Counter;