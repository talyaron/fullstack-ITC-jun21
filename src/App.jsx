import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import MyName from './components/MyName/MyName';

const students = ['Michael S.','Yonatan', 'David', "Sol"]
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      isGreen:true
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleToggleGreen = this.handleToggleGreen.bind(this);
    this.getStudents = this.getStudents.bind(this);
  }

  handleAdd(){
    this.setState({counter:this.state.counter+1})
  }
  handleToggleGreen(){
    this.setState({isGreen:!this.state.isGreen})
  }

  getStudents(){
    try {
      fetch('https://test-api-fs.herokuapp.com/api/getStudents')
      .then(r=>r.json())
      .then(students=>{
        console.log(students)
      })
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.handleAdd} counter={this.state.counter}>ADD</button>
          <button onClick={this.handleToggleGreen} >{this.state.isGreen?"Make Red":"Make Green"}</button>
          <button onClick={this.getStudents} >GET STUDENTS</button>
          <div className={this.state.isGreen?"green":'red'}>
            Learn React
          </div>
          {students.map((student,i)=>{
            return <MyName key={i} name={student} counter={this.state.counter}/>
          })}
          
          
        </header>
      </div>
    )
  }
}

export default App;


