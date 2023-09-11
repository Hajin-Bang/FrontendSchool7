//10-1 내용
// function App() {
//     return (
//         <Hello name='licat'/>
//         //Noname 컴포넌트에 연결하고 싶다면, name=""으로 입력하면 된다
//         //if문으로 각각 다른 컴포넌트에 연결되도록 한다 
//     );
// }

// function Hello({name}){
//     if (name) {
//         return (
//             <div>
//                 <h1>{name}</h1>
//             </div>
//         )
//     }
//     return <NoName/>
// }

// function NoName(){
//     return(
//         <div>
//             <h1>이름을 입력하지 않았습니다.</h1>
//         </div>
//     )
// }

// export default App;


//10-2 번
import React from 'react'
import Detail from './components/Detail';
import Question from './components/Question';
import Review from './components/Review';
import { useState } from 'react';


const ContentsContainer = ({ listName }) => {
    if (listName === "detail") {
        return <Detail />;
      } else if (listName === "qa") {
        return <Question />;
      } else if (listName === "review") {
        return <Review />;
      }
}

const NavBar = () => {
    const [listName,setListName] = useState('detail');
    function checkId(event) {
        setListName(event.target.id)
    }
    return (
        <>
            <nav>
                <ul>
                    <li id='detail' style={listName === "detail" ? {color:"red"} : {color: "black"}} onClick={checkId}>상세정보</li>
                    <li id='qa' style={listName === "qa" ? {color:"red"} : {color: "black"}} onClick={checkId}>Q&A</li>
                    <li id='review' style={listName === "review" ? {color:"red"} : {color: "black"}}onClick={checkId}>Review</li>
                </ul>
            </nav>
            <ContentsContainer listName={listName}/>
        </>
    )
}



export default function App4(){

  return (
    // &&: 첫번째 falsy 값을 반환하거나 혹은 마지막 truthy 값을 반환함
    // ture && 1 && false && <NavBar/>
    // 결과: false
    // || : 첫번째 truthy값을 반환하거나 혹은 마지막 falsy 값을 반환함
    //true || 1 || false || <NavBar />
    //결과: true 
    //false || 1 || false || <NavBar />
    //결과: 1
    //true && 1 || false
    //결과: 1

    // true && <h1>hello world</h1> -> h1 출력
    // false && <h1>hello world</h1> -> false 출력
    // true || <h1>hello world</h1> -> true 출력
    // false || <h1>hello world</h1> -> h1 출력

    <NavBar/>
  )
}

