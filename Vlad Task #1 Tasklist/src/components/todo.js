import react from 'react';

class Todo extends react.Component{
    constructor(props){
        super(props)
        
    }



    render(){
        return (
        <li className={this.props.isDone? ' toogle': ' '} onClick={() => this.props.ontoggle(this.props.id)}>{this.props.text}</li>
        )
    }
}


export default Todo



