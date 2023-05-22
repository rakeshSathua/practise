import React from 'react';

class Click extends React.Component{
    constructor(){
        super();
        this.state={
        msg:'Subscribe guys '
        }
      }
      //function in class dont need function keyword.
      
      subscribe(){
        this.setState({
          msg:'thanks for subscribing '
        })

      }

      render(){
        return<div>
        <button onClick={() => {this.subscribe()}}> Subscribe </button>
        <h1>{this.state.msg}</h1>
        </div>
      }
}

export default Click;