import React from 'react'

export default class TodoItem extends React.Component {
  constructor() {
    super()
  }
  render() {
    console.log(this.props);
    let {e,i,deleteItem,update} = this.props
    return (
          <li key={i}>
          <input type="text" onChange={e=>{update(e.target.value,i)}} value={e}/>
          <button style={{backgroundColor: "#ff00008f"}} onClick={()=>{deleteItem(i)}}>Delete</button>
          </li>
      )
  }
}
