import './App.css';
import TodoBoard from './TodoBoard';
import {useState} from 'react';

function App() {
   const [inputValue, setInputValue] = useState('');
   const [todoList, setTodoList] = useState([]);

   const addItem = () =>{
          setTodoList([...todoList, inputValue])
   }

  return (
    <div className="App">
      
       <input value={inputValue}
         onChange={
           (e)=>{
               setInputValue(e.target.value)
           }
         }/>
       <button
        onClick={addItem}>추가</button>
       <TodoBoard todoList={todoList}/>
    </div>
  );
}

export default App;
