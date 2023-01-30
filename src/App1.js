/* [app2] 함수형 useEffect */

import './App.css';
import {useEffect, useState} from "react";


function App1() {
  //화면 첫 렌더링: Mount, 재렌더링: update, 화면에서 사라질 때: Unmount
  //Defendency, clean up
  const [count, setCount] =useState(1)
  const [input, setInput] =useState("")

  const clickUpdate= () => {
    setCount(count+1)//1씩 증가하는 값을 변경되는 값으로
  }
  const inputUpdate= (e) => {
    //console.log(e)
    setInput(e.target.value)
  }

  /* useEffect(() => {
    console.log('렌더링 🧸💞')
  })//계속 렌더링 */
  /* useEffect(() => {
    console.log('렌더링 🧸💞')
  }, [count])//count가 바뀔때만 렌더링 시키려고 할 때 */
  /* useEffect(() => {
    console.log('렌더링 🧸💞')
  }, [input])//input 바뀔때만 렌더링 시키려고 할 때 */
  useEffect(() => {
    console.log('렌더링 🧸💞')
  }, [])//시작하자마자 한번만 렌더링(재렌더링x)

  return (
    <div>
      <button onClick={clickUpdate} className='btn'>Update</button>
      <span>count : {count}</span>
      <input type="text" value={input} onChange={inputUpdate}></input>
      <span>{input}</span>
    </div>
  );
}

export default App1;