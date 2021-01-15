import react from 'react'

class TodoForm extends react.Component{
    constructor(props){
        super(props)
        this.state = {
            task: ''
        };
    }

    onInput(event){
        const text = event.target.value
        this.setState({
            task = text
        } )
    }

    render(){
        return(
            <form className="header" onSubmit={(event)=>
                {
                    event.preventDefault();
                    this.props.onSubmit(this.state.task);
                }
               }>
                    <h2>Мой список дел</h2>
                    <input type="text" placeholder="Что ты уже задумал?" onInput={this.onInput.bind(this)}></input>
                    <input type="submit" value="Добавить дело" className="addBtn" />
                </form>       
                );
    };
}



export default TodoForm 