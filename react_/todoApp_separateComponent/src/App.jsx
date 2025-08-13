
import { useState } from 'react'
import './App.css'
import Lists from './components/Lists'; //<Lists /> 이렇게 자식 컴포넌트를 넣기 (데이터를 넘겨 주기 위해서 )
import Form from './components/Form';

// app.jsx 가 부모 컴포넌트가 되는것 
// Lists.jsx 가 자식 컴포넌트가 되는것

export default function App(){

  const initialTodoData = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : []

  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id:Date.now(), //Date.now() 는 유니크한 값을 가질 수 있다. 
      title :  value,
      completed : false
    }
    setTodoData([...todoData, newTodo]);
    setValue('');
    //state는 항상 불변성을 유지해야하기 때문에 전개연산자를 사용하여 얕은 복수를 한 것을 넣어준다. 
    localStorage.setItem('todoData',JSON.stringify(newTodo))
  }

 

    
    return(
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>

          <Lists 
            todoData={todoData}
            setTodoData={setTodoData}
            // 부모 컴포넌트에서 자식 컴포넌트로 데이터 넘겨주는 방법 
          />

          <Form 
            handelSubmit={handelSubmit}
            value={value}
            setValue={setValue}
          />

        </div>
      </div>
    )
  
}