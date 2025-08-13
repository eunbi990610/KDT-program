import { useState } from "react"

export default function List({title, completed, id, todoData, setTodoData}){

    const [isEditing, setIsEditing] = useState(false);
    console.log('isEditing', isEditing);
    
    // 현재 수정을 하고 있는지 안하고 있는지를 기억하기 위해서 state를 이용
    const [editedTitle, setEditedTitle] = useState(title);

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
    localStorage.setItem('todoData',JSON.stringify(newTodoData));
  }


   const handelCompleteChange = (id) =>{
    let newTodoData = todoData.map((data) => {
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data;
    })
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData))
  }

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지가 리프레쉬 되면 state가 초기화된다. 
    const newTodoData = todoData.map((data)=>{
        if(data.id === id){
            data.title = editedTitle;
        }
        return data;
    })

    setTodoData(newTodoData);
    setIsEditing(false);
    localStorage.setItem('todoData', JSON.stringify(newTodoData))
   
  }

  
  if(isEditing){    
    return (
        <form style={getStyle(completed)} onSubmit ={handleSubmit}>
            <input type="text" value={editedTitle} autoFocus onChange={handleEditChange}/>
            <button type="button" style={btnStyle} onClick={() => setIsEditing(false)}>X</button>
            <button type="submit" style={btnStyle}>Save</button>
        </form>
    )
          
  }else{
    
    return <div>
        <div key={title} style={getStyle(completed)}>
            <input 
            type="checkbox" 
            checked = {completed}
            onChange={() => handelCompleteChange(id)}/>
            {title}
            <button style={btnStyle} onClick={() => handleClick(id)}>X</button>
            <button style={btnStyle} onClick={() => setIsEditing(true)}>Edit</button>
        </div>
    </div>
     }
}