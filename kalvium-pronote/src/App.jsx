import React from 'react'
import './App.css'
import TodoItem from './Components/TodoItem'

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      input: "",
      todoList: []
    }
  }

  //Changing Value of input whilr typing
  inputChange =(e)=>{
    this.setState({
      input: e.target.value
    })
  }

  formSubmit =(e)=>{
    e.preventDefault()
    if (this.state.input.length>0) {
      
      this.setState({
        todoList: [...this.state.todoList,this.state.input],
        input: ""
      })
    }
  }


  update =(newValue,index)=>{
    let arr = this.state.todoList

    arr.splice(index,1,newValue)
    this.setState({
      todoList: arr
    })
  }
  deleteItem = (index)=>{
    let arr = this.state.todoList

    arr.splice(index,1)
    this.setState({
      todoList: arr
    })
  }

  render(){

    return (
      <>
        <h1>To-Do List</h1>
        <form onSubmit={this.formSubmit}>
          <input type="text" onChange={this.inputChange} value={this.state.input}/>
          <button onClick={this.formSubmit}>Add</button>
        </form>
        <p>My Input : {this.state.input}</p>
        <div className='todoList'>
          <h2>⚒️LIST⚒️</h2>
          {this.state.todoList.length==0 ? (<h3>List is Empty</h3>):(
            this.state.todoList.map((e,i)=>{
            return <TodoItem e={e} i={i} deleteItem={this.deleteItem} update={this.update}/>
          })
          )}

        </div>
      </>
    )
  }
}

export default App
