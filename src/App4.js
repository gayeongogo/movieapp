/* useRef: 렌더링을 하지 않고 어떤 동작을 수행하게 할때 유용 */
import './App.css';
import {useRef, useState} from 'react';

function App4() {
    /* const ref=useRef(0);
    console.log(ref); */
    const [count, setCount]=useState(0);
    const countRef=useRef(0);
    console.log(countRef);
    console.log('렌더링');
    const increaseCountState = () => {
        setCount(count+1)
    }
    const increaseCountRef = () => {
        countRef.current=countRef.current+1;
    }
    return(
        <div>
            <p className='state'>State: {count}</p>
            <p className='state'>Ref: {countRef.current}</p>
            <button className='btn' onClick={increaseCountState}>State up</button>
            <button className='btn' onClick={increaseCountRef}>Ref up</button>
        </div>
    )
}

export default App4;

