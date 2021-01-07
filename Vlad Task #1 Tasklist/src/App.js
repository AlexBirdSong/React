import React from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        todos: [],
    };
    
}

  ontoggle(id){

   const chengesStatearr = this.state.todos.map((item)=>{
      if(item.id==id){
        item.isDone = !item.isDone;
      }
      return item
    })
    this.setState({todos:chengesStatearr})
    // const result = this.state.todos.find((item)=>item.id === id)
    // result.isDone = !result.isDone;
    

  }

 onFormSubmit(i){
    const arrtodos = this.state.todos;
    arrtodos.push({id: i, text: i, isDone: false});
    this.setState({todos: arrtodos}); 
    
  }

  

  render() {
    return (
      <div>
        <TodoForm onSubmit={ this.onFormSubmit.bind(this)} />
        <TodoList todos = {this.state.todos} completefun = {this.ontoggle.bind(this)} />
      </div>
    );
  }
}
export default App;
