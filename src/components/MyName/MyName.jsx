import React, { Component } from 'react';


import './MyName.css';
let x = 100;
class MyName extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
            name: this.props.name
        }
        this.handleName = this.handleName.bind(this)
    }

    componentDidMount(){
        console.log('componentDidMount')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log(' componentWillUnmount')
    }

    handleCounter() {
        console.log(this)
        this.setState({ counter: this.state.counter + 1 });
        console.log(this.state.counter)
        x++;
        console.log(x)
    }

    handleName(ev) {
        this.setState({ name: ev.target.value })
    }

    render() {
        return (
            <div className='myName' onClick={() => this.handleCounter()}>
                <p>{this.state.name}, and clicked this props:{this.props.counter} state:{this.state.counter}</p>
                <input type='text' placeholder='name' onKeyUp={this.handleName} />
            </div>
        )
    }

}

export default MyName