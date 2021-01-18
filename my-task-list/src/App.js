import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        todos: [],
    };
  }
}



export default App;
