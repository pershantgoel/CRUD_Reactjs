import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      title : "CRUD Application",
      act:0,
      index : "",
      datas : []
    }
    this.fSubmit = this.fSubmit.bind(this);
    this.fRemove = this.fRemove.bind(this);
    this.fEdit = this.fEdit.bind(this);


  }
  
  fSubmit=(e)=>{
    e.preventDefault();
    console.log("fn call")
    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    let data = {
      name , address
    }
    datas.push(data);
    this.setState({datas:datas});

    this.refs.myForm.reset();
    console.log(this.state.datas);

  }
  fRemove=(i)=>{
    let datas = this.state.datas;
    datas.splice(i,1)
  }
  fEdit=(i)=>{

  }

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="your name" className="formField" autoFocus/>
          <input type="text" ref="address" placeholder="your address" className="formField"/>
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit</button>

        </form>

      <ul>
        {console.log("datas",datas)}
        {datas.map((data,i)=>
        <li key={i} className="myList">
          {i+1}.{data.name} , {data.address}
          <button onClick={()=>this.fRemove(i)} className="myButton">remove</button>
          <button onClick={()=>this.fEdit(i)} className="myButton">edit</button>        

        </li>
        )}
      </ul>

      </div>
    );
  }
}

export default App;
