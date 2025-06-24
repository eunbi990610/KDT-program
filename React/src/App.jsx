
import { Component } from 'react'
import './App.css'

// 클래스형 컴포넌트
export default class App extends Component{
  render(){
    return(
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>
        </div>
      </div>
    )
  }
}
