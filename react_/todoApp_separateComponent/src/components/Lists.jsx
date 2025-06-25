// app.jsx 가 부모 컴포넌트가 되는것 
// Lists.jsx 가 자식 컴포넌트가 되는것


export default function Lists({todoData, setTodoData}){
    // props.todoData //(매개변수를 props로 받아오는 방법 )
    // props.setTodoData // 부모 컴포넌트에서 넘겨준 데이터 받아오는 방법
    // todoData // 데이터를 객체 자체로 매개변수로 받아올 때 데이터 사용 방법
    // setTodoData
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

   const handelCompleteChange = (id) =>{
    let newTodoData = todoData.map((data) => {
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data;
    })
    setTodoData(newTodoData);
  }



    return <div>
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
          }</div>
        
}