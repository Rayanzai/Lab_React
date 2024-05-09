import React from "react"

class Relogio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTime: '00:00:00'
    }
  }

  render(){
    setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() })
    }, 1000 );
    
    return(
      <>
      <h1>Meu relógio</h1>
      <h1>{this.state.currentTime}</h1>
      </>
    )
  }
}
export default Relogio;
