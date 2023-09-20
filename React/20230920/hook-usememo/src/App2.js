import React, { useRef, useState, useMemo } from 'react'


//useMemo 실전예제

export default function App2() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [userInfo, setUserInfo] = useState([]);

    const inputName = useRef(null);
    const inputId = useRef(null);


    function handlInputName(event) {
        setName(event.target.value);
        console.log('렌더링 - 1');
    } 

    function handlInputId(event) {
        setId(event.target.value);
        console.log('렌더링 - 2');
    }

    function handleSubmit(event) {
        event.preventDefault();

        // 유저 입력값을 초기화합니다.
        inputName.current.value = '';
        inputId.current.value = '';
        inputName.current.focus();

        // 유저의 입력 값을 userInfo변수에 저장합니다.
        const newInfo = [...userInfo, { name, id }];
        setUserInfo(newInfo);

        console.log('렌더링 - 3');
    }

    function getNum(list) {
        console.log('렌더링!');
        return list.length
    } //이 console이 계속 찍히는 이유: userInfo가 갱신될 때마다 컴포넌트는 계속 렌더링되므로 렌더링 될 때마다 콘솔창도 실행! 
    //바뀌는 부분만 렌더링을 해야하는데 코드 전체도 렌더링되고 있습니다.
    //따라서 바로 아래↓ useMemo를 이용해서 값이 바뀔 때만 실행되도독 한다!

    //userInfor값이 업데이트 될 때만 getNum을 실행하도록 수정
    const itemLength = useMemo(() => {
        getNum(userInfo);
    },[userInfo]); 

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='이름을 입력해주세요' onChange={handlInputName} ref={inputName} />
                <input type="text" placeholder='아이디를 입력해주세요' onChange={handlInputId} ref={inputId} />
                <button>회원명부 작성</button>
            </form>

            <ul>
                {userInfo.map((value, index) => {
                    return (
                        <li key={index}>
                            <h3>이름 : {value.name}</h3>
                            <strong>아이디 :{value.id}</strong>
                        </li>)
                })}
            </ul>
            <span>{getNum(userInfo)}</span>
        </>
    )
}