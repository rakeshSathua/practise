import React, { Component } from 'react'

export class Fuctionclick extends Component {
  constructor(){
    super();
    //bind used to 
    //this.changeState = this.changeState.bind(this);

    this.state={
      course:"MCA"
    }
  }

  changeState = () => {
    console.log("Hello Rakesh ---> " + this);
    this.setState({
      course:"BE"
    })
  }
  render() {
    
    return (
      <>
      <button onClick={this.changeState}> HIT ME</button>
      <h1>here -- {this.state.course}</h1>
      <button onClick={this.changeState}> HIT ME 2</button>
      </>
    )
  }
}

export default Fuctionclick