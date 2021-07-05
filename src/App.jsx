import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import MyName from './components/MyName/MyName';

const name = 'Michael S.'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(){
    this.setState({counter:this.state.counter+1})
  }
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.handleAdd} >ADD</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <MyName name='Michael' />
          <MyName name={name} counter={this.state.counter}/>
          <MyName name={'Yegor'} />
          <MyName name={'Eli'} />
          <MyName name={'Omri'} />
          <MyName name={'David'} />
          <MyName name={'Eitan'} />
        </header>
      </div>
    )
  }
}

export default App;


