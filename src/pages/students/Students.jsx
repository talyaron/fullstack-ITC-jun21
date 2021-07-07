import { Component } from 'react';
import axios from 'axios';




//components
import MyName from '../../components/MyName/MyName';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      isGreen: true,
      students: []
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleToggleGreen = this.handleToggleGreen.bind(this);
    this.getStudents = this.getStudents.bind(this);
    this.handleSendStudent = this.handleSendStudent.bind(this)
  }

  handleAdd() {
    this.setState({ counter: this.state.counter + 1 })
  }
  handleToggleGreen() {
    this.setState({ isGreen: !this.state.isGreen })
  }

  getStudents() {
    try {
      fetch('https://test-api-fs.herokuapp.com/api/getStudents')
        .then(r => r.json())
        .then(students => {
          console.log(students);
          this.setState({ students });
        })
    } catch (error) {
      console.error(error)
    }
  }

  async handleSendStudent(ev) {
    try {
      ev.preventDefault();
      let { id, name } = ev.target.elements;
      id = id.value;
      name = name.value;
      console.log(id, name)
      let msg = await axios.post('https://test-api-fs.herokuapp.com/api/addStudent', { id, name })
      console.log(msg)
    } catch (e) {
      console.error(e)
    }
  }

  componentDidMount(){
    this.getStudents()
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSendStudent}>
            <input type='text' placeholder='name' name='name' />
            <input type='text' placeholder='ID' name='id' />
            <button type='submit'>ADD</button>
          </form>
          <button onClick={this.handleAdd} counter={this.state.counter}>ADD</button>
          <button onClick={this.handleToggleGreen} >{this.state.isGreen ? "Make Red" : "Make Green"}</button>
          <button onClick={this.getStudents} >GET STUDENTS</button>
          <div className={this.state.isGreen ? "green" : 'red'}>
            Learn React
          </div>
          {this.state.students.map((student, i) => {
            return <MyName key={student._id} name={student.name} counter={this.state.counter} />
          })}


        </header>
      </div>
    )
  }
}

export default App;


