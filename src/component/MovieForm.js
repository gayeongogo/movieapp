import {useState, useRef, useEffect} from 'react';

const MovieForm = ({addMovie}) => {
    useEffect(() => {
        inputRef.current.focus();
    },[]);//[]로 재렌더링 막기

    const inputRef=useRef();
    const [movieTitle, setMovieTitle]=useState('');
    const [movieYear, setMovieYear]=useState('');
    const [titleError, setTitleError]=useState('');//안쓰고 나왔을 때 값
    const [yearError, setYearError]=useState('');//안쓰고 나왔을 때 값
    
    const validateForm = () => {
        resetErrors();
        let validate=true;
        if(!movieTitle){//movieTitle값이 없으면
            setTitleError('영화제목을 입력하세요')
            validate=false;
        }
        if(!movieYear){
            setYearError('개봉년도를 입력하세요')
            validate=false;
        }
        return validate;
    }
    const resetErrors = () =>{
        setTitleError('');
        setYearError('');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(validateForm()){
            addMovie({
                id: Date.now(),
                title: movieTitle,
                year: movieYear
            })   
        }
        setMovieTitle('');//전송 누르면 썼던 내용 없어짐 
        setMovieYear('');
        inputRef.current.focus();//전송하면 다시 focus
    }

    return (
        <form action="#" onSubmit={onSubmit}>
            <div className='input-area'>
                <div className='input-box'>
                    <input type="text" placeholder="영화제목을 쓰세요" value={movieTitle} onChange={(e) => {setMovieTitle(e.target.value)}} ref={inputRef}/>
                    <div className='err'>{titleError}</div>
                </div>
                <div className='input-box'>
                <input type="text" placeholder="개봉년도를 쓰세요" value={movieYear} onChange={(e) => {setMovieYear(e.target.value)}}/>
                <div className='err'>{yearError}</div>
                </div>
                
            </div>
            <button type="submit" className='btn'>ADD</button>
        </form>
    );
};

export default MovieForm;