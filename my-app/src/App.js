import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {v4 as uuid} from "uuid";

function App() {

  const [toDo, setToDo] = useState();
  const [toDoList, setToDoList] = useState([]);

  const onTodoInputChange = (e) =>{
      setToDo(e.target.value);
  }

  const onAddTodoClick = () =>{
    setToDoList([...toDoList,{id : uuid(), todo : toDo, isCompleted : false}])
    setToDo('');
  }

  const onDeleteClick = (id) => {
    const filteredList = toDoList.filter(todo => todo.id !== id);
    setToDoList(filteredList);;
  }

  const onCheckChange = (id) =>{
    const updatedTodoList = toDoList.map(todo => todo.id === id ? {...todo, isCompleted : !todo.isCompleted} : todo)
    setToDoList(updatedTodoList);
  }
  console.log(toDoList);

  return (
    <>
    <div className="App"> 
      <h1>My WishList</h1>
      <div>
        <input value={toDo} onChange={onTodoInputChange} placeHolder = "Add your Wishlist here..."/>
        <button onClick = {onAddTodoClick}>Add</button>
      </div>
      <div>
        {
          toDoList?.length >0 &&  toDoList.map(wish => (
            <div key = {wish.id}>
              <label>
                <input onChange={() => onCheckChange(wish.id)} type='checkBox' />
                <span className={`${wish.isCompleted ? 'strike-through' : ''}`}>{wish.todo}</span>
              </label>
              <button onClick={() => onDeleteClick(wish.id)}>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default App;
