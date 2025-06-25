
import { Component } from 'react'
import './App.css'

// 클래스형 컴포넌트
export default class App extends Component{

  state = {
  todoData : [
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
    ],
    value : ''
  }


 

  btnStyle = {
    color : '#fff',
    border : 'none',
    borderRadius : '50%',
    padding : '5px 9px',
    cursor : 'pointer',
    float : 'right'

  }

  getStyle =(completed) => {
    return {
      padding : '10px',
      borderBottom : '1px dotted #ccc',
      textDecoration : completed ? 'line-through':'none'
    }
  }

  handleClick = (id) =>{
    console.log(id,"삭제");
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    console.log(newTodoData);
    // state update
    this.setState({todoData : newTodoData});
    
  }

  handelChange = (e) => {
    this.setState({value : e.target.value});
    
  }

  handelSubmit = (e) => {
    e.preventDefault(); // 페이지가 리프레쉬되는게 기본 동작이다. 그 기본 동작을 못하게 막아주는 메서드

    let newTodo = {
      id:Date.now(), //Date.now() 는 유니크한 값을 가질 수 있다. 
      title : this.state.value,
      completed : false
    }
    this.setState({
      todoData : [...this.state.todoData, newTodo],
      value : ''
    })
    
    //state는 항상 불변성을 유지해야하기 때문에 전개연산자를 사용하여 얕은 복수를 한 것을 넣어준다. 

  }

  handelCompleteChange = (id) =>{
    let newTodoData = this.state.todoData.map((data) => {
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data;
    })
    this.setState({todoData : newTodoData});
  }


  render(){
    return(
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>

          {
            this.state.todoData.map((data) => (
              <div key={data.title} style={this.getStyle(data.completed)}>
              <input 
              type="checkbox" 
              checked = {data.completed}
              onChange={() => this.handelCompleteChange(data.id)}/>
              {data.title}
              <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>X</button>
              {/* 인수를 넣지 않아도 되면 메서드이름만 적어도 됨 */}
              </div>
            ))
          }

          <form style={{display:'flex'}} onSubmit={this.handelSubmit}>
            <input 
            type="text" 
            name='value' 
            style={{flex: '10',padding: '5px'}}
            placeholder='할 일을 입력하세요' 
            value={this.state.value} 
            onChange={this.handelChange}/>
            <input type="submit" value='입력' className='btn' style={{flex:'1'}} />
          </form>


        
        </div>
      </div>
    )
  }
}