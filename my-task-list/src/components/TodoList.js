import react from 'react'
import todo from './todo' 


class TodoList extends react.Component{
    constructor(props){
        super(props)

    }


    render(){
        return(
            <ul>
                {this.props.todos.map((item,index)=>{
                    return <Todo key={index} text = {item.text} id = {item.id} isDone = {item.isDone} ontoggle = {this.props.completefun} />
                })
            };
            </ul>
        );
        
    };
}

export default TodoList