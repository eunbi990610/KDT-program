
import { useState } from 'react'
import './App.css'
console.log("📌 App 컴포넌트 실행됨");
// 함수형 컴포넌트 - React Hooks
export default function App(){

  const [todoData, setTodoData] = useState([
     {
        id : "1",
        title : "공부하기",
        completed : true
      },
      {
        id : "2",
        title : "청소하기",
        completed : false
      }
  ])
  const [value, setValue] = useState('');

  const btnStyle = {
    color : '#fff',
    border : 'none',
    borderRadius : '50%',
    padding : '5px 9px',
    cursor : 'pointer',
    float : 'right'
  }

  const getStyle =(completed) => {
    return {
      padding : '10px',
      borderBottom : '1px dotted #ccc',
      textDecoration : completed ? 'line-through':'none'
    }
  }

  const handleClick = (id) =>{
    console.log(id,"삭제");
    let newTodoData = todoData.filter((data) => data.id !== id);

    setTodoData(newTodoData);
    
  }

  const handelChange = (e) => {
    setValue(e.target.value);
  }

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
  }

  const handelCompleteChange = (id) =>{
    let newTodoData = todoData.map((data) => {
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data;
    })
    setTodoData(newTodoData);
  }


    console.log("현재 todoData : "  , todoData);
    
    return(
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>

          {
            todoData.map((data) => (
              <div key={data.title} style={getStyle(data.completed)}>
              <input 
              type="checkbox" 
              checked = {data.completed}
              onChange={() => handelCompleteChange(data.id)}/>
              {data.title}
              <button style={btnStyle} onClick={() => handleClick(data.id)}>X</button>
              </div>
            ))
          }

          <form style={{display:'flex'}} onSubmit={handelSubmit}>
            <input 
            type="text" 
            name='value' 
            style={{flex: '10',padding: '5px'}}
            placeholder='할 일을 입력하세요' 
            value={value} 
            onChange={handelChange}/>
            <input type="submit" value='입력' className='btn' style={{flex:'1'}} />
          </form>

        </div>
      </div>
    )
  
}