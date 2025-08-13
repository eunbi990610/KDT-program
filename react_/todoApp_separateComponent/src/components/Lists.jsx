// app.jsx 가 부모 컴포넌트가 되는것 
// Lists.jsx 가 자식 컴포넌트가 되는것

import List from "./List";


export default function Lists({todoData, setTodoData}){
    // props.todoData //(매개변수를 props로 받아오는 방법 )
    // props.setTodoData // 부모 컴포넌트에서 넘겨준 데이터 받아오는 방법
    // todoData // 데이터를 객체 자체로 매개변수로 받아올 때 데이터 사용 방법
    // setTodoData
   


    return <div>
        {
            todoData.map((data) => (
              
              <List 
                key={data.id} // 왜 받아오지도 않는 key값을 넘겨주지..?
                //map을 사용하는 반복분을 실행할 대 key 값을 넘겨줘야한다. 
                title={data.title}
                completed={data.completed}
                id={data.id}
                todoData={todoData}
                setTodoData={setTodoData}

              />
            ))
          }</div>
        
}