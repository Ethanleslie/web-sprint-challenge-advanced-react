import e from 'cors'
import React, {useState} from 'react'
import axios from 'axios'



export default function AppFunctional(props) {
 const [email, setEmail] = useState('')
 const [steps, setSteps] = useState(0)
 const [message, setMessage] = useState('')
 const [index, setIndex] = useState(4)
 const gridCoords = ['1, 1', '2, 1', '3, 1', '1, 2', '2, 2', '3, 2', '1, 3', '2, 3', '3, 3']
 
 



  function reset(evt) {
    evt.preventDefault();
    setSteps(0)
    setEmail('')
    setIndex(4);
    setMessage('')
  }

  function up (evt)  {
    evt.preventDefault()
    if(index <=3 ){
      setMessage(`You can't go up`)
    }
  
    if(index <=8 && index >= 3){
      setIndex(index - 3)
      setSteps(steps +1)
    }
  }

  function down (evt)  {
    evt.preventDefault()
    if(index >= 6 ){
      setMessage(`You can't go down`)
    }
  
    if(index <6 && index >= 0){
      setIndex(index +3)
      setSteps(steps +1)
    }
  }

  function left (evt)  {
    evt.preventDefault()
    if(index <1 ){
      setMessage(`You can't go left`)
    }
  
    if(index <=8 && index >= 1){
      setIndex(index - 1)
      setSteps(steps +1)
    }
  }
  function right (evt)  {
    evt.preventDefault()
    if(index > 7 ){
      setMessage(`You can't go right`)
    }
  
    if(index < 8 && index >= 0){
      setIndex(index + 1)
      setSteps(steps +1)
    }
  }
  
  

  function onChange(evt) {
    
    const {value} = evt.target
    setEmail(value) 
  }

  function onSubmit(evt) {
    evt.preventDefault();
    const chars = gridCoords[index].split('');

    axios.post(`http://localhost:9000/api/result`, {
      x: chars[3],
      y: chars[0],
      steps: steps,
      email: email
    })
    
    .then(res => {
      setMessage(res.data.message)
    })
    .catch(res => {
      setMessage('Ouch: email is required')
    })
  }

  return (
    
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{`Coordinates (${gridCoords[index]})`}</h3>
        <h3 id="steps">{`You moved ${steps} ${steps === 1  ? 'time' : 'times'}`}</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square ${idx === index ? ' active' : ''}`}>
              {idx === index ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={(evt)=> left(evt)}>LEFT</button>
        <button id="up" onClick={(evt)=> up(evt)}>UP</button>
        <button id="right" onClick={(evt)=> right(evt)}>RIGHT</button>
        <button id="down" onClick={(evt)=> down(evt)}>DOWN</button>
        <button id="reset" onClick={(evt)=> reset(evt)}>Reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email" value={email} onChange={onChange}></input>  
        <input id="submit" type="submit" onClick={(evt) => onSubmit(evt)}></input>
      </form>
    </div>
  )
}



