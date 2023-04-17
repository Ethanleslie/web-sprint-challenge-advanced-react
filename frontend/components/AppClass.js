import React from 'react'
import axios from 'axios'





export default class AppClass extends React.Component {
  state = {
    index: 4,
    eMessage: '',
    gridCoords: ['1, 1', '2, 1', '3, 1', '1, 2', '2, 2', '3, 2', '1, 3', '2, 3', '3, 3'],
    email: '',
    steps: 0
  }
 

  reset = (evt) => {
    evt.preventDefault();
    this.setState({
      index: 4,
    eMessage: '',
    gridCoords: ['1, 1', '2, 1', '3, 1', '1, 2', '2, 2', '3, 2', '1, 3', '2, 3', '3, 3'],
    email: '',
    steps: 0
      

    })
  }


  up = (evt) => {
    evt.preventDefault()
    if(this.state.index <= 4){
      this.setState({
        ...this.state,
        eMessage: `You can't go up`,
      })}

     if(this.state.index <= 8 && this.state.index >=3) {
     this.setState({
       ...this.state,
       index: this.state.index-3,
      steps: this.state.steps+1
  })}
    
  }

  down = (evt) => {
    evt.preventDefault()
    if(this.state.index >= 6){
      this.setState({
        ...this.state,
        eMessage: `You can't go down`,
      })}

     if(this.state.index < 6 && this.state.index >=0) {
     this.setState({
       ...this.state,
       index: this.state.index+3,
      steps: this.state.steps+1
  })}
  }

  left = (evt) => {
    evt.preventDefault()
    if(this.state.index <= 1){
      this.setState({
        ...this.state,
        eMessage: `You can't go left`,
      })}

     if(this.state.index <= 8 && this.state.index >=1) {
     this.setState({
       ...this.state,
       index: this.state.index-1,
      steps: this.state.steps+1
  })}
  }

  right = (evt) => {
    evt.preventDefault()
    if(this.state.index <= 8){
      this.setState({
        ...this.state,
        eMessage: `You can't go right`,
      })}

     if(this.state.index < 8 && this.state.index >=0) {
     this.setState({
       ...this.state,
       index: this.state.index+1,
      steps: this.state.steps+1
  })}
  }

  

  onChange = (evt) => {
    const {value} = evt.target
    this.setState({...this.state, email: value})
  }

  onSubmit = (evt) => {
   evt.preventDefault()
   const chars = this.state.gridCoords[this.state.index].split('');
    console.log(this.state.gridCoords[chars[0]])
    console.log(this.state.gridCoords[chars[3]])
    console.log(chars[3])

    console.log(this.state.steps)
    console.log(this.state.email)
    


    axios.post('http://localhost:9000/api/result', {
     x: chars[0],
     y: chars[3],
     steps: this.state.steps,
     email: this.state.email
    })
    .then(res => {
    console.log(res)
    this.setState({...this.state, eMessage: res.data.message })
      
    })
    .catch(err => {
        this.setState({...this.state, eMessage: 'Ouch: email is required'})
    })
  }

  render() {
    const { className } = this.props
    const {index, steps} = this.state
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{`coordinates are ${this.state.gridCoords[index]} `}</h3>
          <h3 id="steps">{`You moved ${steps} times`}</h3>
        </div>
        <div id="grid">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div key={idx} className={`square${idx === this.state.index ? ' active' : ''}`}>
                {idx === this.state.index ? 'B' : null}
              </div>
            ))
          }
        </div>
        <div className="info">
          <h3 id="message">{this.state.eMessage}</h3>
        </div>
        <div id="keypad">
           <button id="left"onClick={(evt) => this.left(evt)}>LEFT</button>
         <button id="up" onClick={(evt) => this.up(evt)}>UP</button>
          <button id="right" onClick={(evt) => this.right(evt)}>RIGHT</button>
          <button id="down"onClick={(evt) => this.down(evt)}>DOWN</button>
          <button id="reset"onClick={(evt)=> this.reset(evt)}>reset</button> 
        </div>
        <form>
          <input id="email" type="email" placeholder="type email" value={this.state.email} onChange={this.onChange}></input>
          <input id="submit" type="submit" onClick={(evt) => this.onSubmit(evt)}></input>
        </form>
      </div>
    )
  }
}



