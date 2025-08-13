import React from 'react'
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import List from './List';


const Lists = React.memo( ({todoData, setTodoData, handleClick}) => {
  
  const handleEnd = (result) => {
  console.log("result", result);
  
  //result : source 항목 및 대상 위치와 같은 드래그 이벤트에 대한 정보가 포함된다. 
  if(!result.destination) return; //목적지가 없으면 함수 종료
  
  const newTodoData = [...todoData]; // 리액트 불변성을 지켜주기 위해 새로운 todoData 생성

  //1. 변경시키려는 아이템을 배열에서 지워준다.
  //2. return 값으로 지워진 아이템을 잡아준다. 
  const [reorderedItem] = newTodoData.splice(result.source.index, 1);
  //splice() 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다. 

  //원하는 자리에 reorderedItem을 insert 해준다. 
  newTodoData.splice(result.destination.index, 0, reorderedItem);
  setTodoData(newTodoData);
  localStorage.setItem('todoData', JSON.stringify(newTodoData));

}
  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='todo'>
          {(provided)=>(
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index)=>(
                <Draggable 
                  key={data.id} 
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot)=>(
                    <List
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      completed={data.completed}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      provided={provided}
                      snapshot={snapshot}
                      handleClick={handleClick}
                    />
                  )}
                </Draggable>
              ))} 
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});



export default Lists