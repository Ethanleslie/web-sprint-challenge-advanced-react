import e from 'cors'
import React, {useState} from 'react'



export default function AppFunctional(props) {
 const [email, setEmail] = useState('')
 const [steps, setSteps] = useState(0)
 const [message, setMessage] = useState('')
 const [index, setIndex] = useState(4)
 const gridCoords = ['1, 1', '2, 1', '3, 1', '1, 2', '2, 2', '3, 2', '1, 3', '2, 3', '3, 3']
 
 



  function reset(evt) {
    evt.preventDefault();
    setSteps(2)

  }

  
  

  function onChange(evt) {
    e.preventDefault();
      
     
  }

  function onSubmit(evt) {
    evt.preventDefault();

    axios.get(`POST http://localhost:9000/api/result`)
    .then(res => {

      setEmail(res.data.email);
      setSteps(res.data.steps);

    })
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates (2, 2)</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === 4 ? ' active' : ''}`}>
              {idx === 4 ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left">LEFT</button>
        <button id="up">UP</button>
        <button id="right">RIGHT</button>
        <button id="down">DOWN</button>
        <button id="reset" onClick={(evt)=> reset(evt)}>Reset</button>
      </div>
      <form>
       {/* { <input id="email" type="email" placeholder="type email" value={props.email.value} onChange={props.onChange}></input> } */}
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}


// keep track of x and y
// keep track of coordinates based on index
// style also changes
// move counter +1 every time you hit button
// b square moves with buttons
