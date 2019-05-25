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
  }
  
  fSubmit=(e)=>{
    e.preventDefault();
    console.log("fn call")
    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    if(this.state.act===0){     //new
      let data = {
        name , address
      }
      datas.push(data);
      this.setState({datas:datas});
    }else{                      //update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
    }

    this.setState({datas:datas,act:0});

    this.refs.myForm.reset();
    console.log(this.state.datas);

  }
  fRemove=(i)=>{
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({datas});
    this.refs.myForm.reset();
  }
  fEdit=(i)=>{
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;
    this.setState({act:1 , index:i});

  }

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="Your Name" className="formField" autoFocus/>
          <input type="text" ref="address" placeholder="Your Address" className="formField"/>
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit</button>

        </form>

      <ul>
        {console.log("datas",datas)}
        {datas.map((data,i)=>
        <li key={i} className="myList">
          {i+1}.{data.name} , {data.address}
          <button onClick={()=>this.fRemove(i)} className="myListButton">remove</button>
          <button onClick={()=>this.fEdit(i)} className="myListButton">edit</button>        

        </li>
        )}
      </ul>

      </div>
    );
  }
}

export default App;
