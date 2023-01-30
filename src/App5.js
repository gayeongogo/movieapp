
import './App.css';
import {useRef, useEffect} from 'react';

function App5() {
    const inputRef=useRef();//inputRef의 초기값
    useEffect(() => {//시작하자마자 일어나게 함
        //console.log(inpurRef)
        inputRef.current.focus();//input에 현재 포커스
    })

    const login = () => {
        alert(`반갑습니다 ${inputRef.current.value}님!`)
    }
    return(
        <div>
            <input type='text' placeholder='이름을 입력하세요' ref={inputRef}></input>
            <button onClick={login}>로그인</button>
        </div>
    )
}

export default App5;

