import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: props.count ? props.count : 0,
        }
    }
    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }

    render(){
        return(
        <>
            <span className='badge badge-primary m-1 p-2'>{this.formatCount(this.state.count)}</span>
            <button onClick={() => this.setState({count:this.state.count+1})} className='btn btn-success btn-sm m-1'>Increment</button>
            <button onClick={() => this.setState({count:this.state.count-1})} className='btn btn-danger btn-sm m-1'>Decrement</button>
        </>
        )
    }
}

export default Counter;