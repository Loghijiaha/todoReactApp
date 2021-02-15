import React from 'react';
import "./index.css";

// stateless 

const ToDoForm = ({addToDo}) => {
    let input = '';

    let textInput = React.createRef();
  
    return(
        <div>
            <label style={{tabSize : 2}}>Enter Items here</label>
            <input style = {{fontSize : 40 , margin: 20}} ref ={e =>{textInput = e }} />
            <button style = {{fontSize : 40}} onClick={()=> {
                addToDo(textInput);
                textInput.focus();
                }}>+++</button>
        </div>
    );
    
}

const ToDo =({todo,remove}) => {
    return(<li onClick={()=>(remove(todo.id))}>{todo.text}</li>);
}
const ToDoList = ({todos,remove})=>{
    const list = todos.map((todo)=>{
        return(<ToDo todo ={todo} key ={todo.id} remove={remove}/>);
    });
    return <ul>{list}</ul>
}
window.id  = 0;
class ToDoApp extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            data :[]
        }
       
    }
    // add todo function
    addToDo = (input) => {
        const todo = {text : input.value, id : window.id++};
        this.state.data.push(todo);

        this.setState({data : this.state.data} );

    }

    // remove todo function
    removeToDo = (id) => {

        const remainder = this.state.data.filter((todo)=> {
            if(todo.id !== id) return todo;
        });
        this.setState({data:remainder});
    }

    componentDidMount = () =>{

    }
    render(){
        return(
            <div>
                <ToDoForm addToDo={this.addToDo}></ToDoForm>
                <ToDoList todos = {this.state.data} remove = {this.removeToDo}></ToDoList>
            </div>
            
        );
    };

}

export default ToDoApp;