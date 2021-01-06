import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Task(props){
    return (
      <li className="task"
      className="task"
      onClick= {props.onClick}>
      {props.value}
      </li>
    );  
}


class TaskList extends React.Component {
  constructor(props) {
    super(props);   
    this.state = {
      tasks: Array().fill(null),
      isDone: false,
    };
  }

  handleClick(i) {
    const tasks = this.state.tasks.slice();
    tasks[i] = this.state.isDone ? false : true;
    this.setState({
      tasks: tasks,
      isDone: !this.state.isDone,
    });
  }

  renderTask(i) {
    return <Task         
    value={this.state.tasks[i]}
    onClick={() => this.handleClick(i)}
    />
  }

  render() {
    return (
      <div>
        <ul>
            {this.state.tasks.map(task => (
            <span>{this.renderTask()}</span>
          ))}
       </ul>
      </div>
    );
  }
}

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <form class="header" onSubmit={this.handleSubmit}>
        <h2>Мой список дел</h2>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Что ты уже задумал?"></input>
        <input type="submit" value="Добавить дело" class="addBtn" />
      </form>
    );
  }
}



class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <Head />
        <TaskList />
      </div>
    );
  }
}



// ========================================

ReactDOM.render(
  <ToDoList />,
  document.getElementById('root')
);

