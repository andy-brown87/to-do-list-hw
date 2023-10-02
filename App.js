import './App.css';
import React, {useState} from 'react';

function App() {

const [toDos, setToDos] = useState([
  {name: "Buy Shopping ", isDone: false},
  {name: "Clean Bathroom ", isDone: true},
  {name: "Car MOT ", isDone: false}
])
const [newToDo, setnewToDo] = useState("")
const toDoList = toDos.map((toDo, index) => {
  return (
    <li key ={index} className={toDo.isDone ? "done" : "not-done"}>
        <span>{toDo.name}</span>
        {toDo.isDone ? <span className='done'>Done!
        </span>: <button onClick={() => doItem(index)}> Done?</button>}
      </li>
    )
})

const doItem = (index) => {
  const copyToDos = [... toDos]  
  const updateToDo ={... copyToDos[index]} 
  updateToDo.isDone = true 
  copyToDos[index] = updateToDo 
  setToDos(copyToDos) 
}


const handleToDoInput = (event) => {
  setnewToDo(event.target.value)
}

const saveNewToDo = (event) => {
  event.preventDefault()
  const copyToDos = [... toDos]
  copyToDos.push({name: newToDo, isDone:  false})
  setToDos(copyToDos)
  setnewToDo("")
}

return(
  <div className="App">

      <h1>To Do List</h1>
      <hr></hr>

      <form  onSubmit={saveNewToDo}>
          <label htmlFor='new-toDo'> Add a new to do:</label>
          <input id='new-toDo' type ='text' value={newToDo} onChange={handleToDoInput}/>
          <input type='submit' value='Save to do' onSubmit={saveNewToDo}/>
      </form>

      <ul>
          {toDoList}
      </ul>

    </div>
  );


}
export default App
