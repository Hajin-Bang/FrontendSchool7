// import { useState } from 'react'

//부하가 발생되는 코드 (= 실행 속도가 느린 코드)
//실행한 함수를 계속 실행함 
//usememo를 통해 개선할 수 있음 => 아래 코드 

// function 부하(){
//   let s = 0
//   for (let i = 0; i < 1000000000; i++) {
//     s += i
//   }
//   return s
// }

// function App() {
//   const [count, setCount] = useState(0)
//   let result = 부하()

//   const handleCountUp = (e) => {
//     setCount(count + 1)
//     console.log(count)
//   }
  
//   return (
//     <div>
//       <h1>계산 결과 : {result}</h1>
//       <div>{count}</div>
//       <button onClick={handleCountUp}>UP!</button>
//     </div>
//   );
// }
// export default App;




//useMemo를 통한 코드 개선
import { useState, useMemo } from 'react'

function 부하(){
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  return s
}

function App() {
  const [count, setCount] = useState(0)
  const result = useMemo(()=>{
    return 부하()
  }, []);  //만약 의존배열이 없다면 콜백함수를 무조건 실행합니다.

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>UP!</button>
    </div>
  );
}
export default App;



//특정 변수를 감시하는 => 특정변수가 변할 때만 복잡한 연산을 수행하도록 지정할 수도 있다
//모든 결과를 다 저장하면 메모리 낭비가 되기 때문에 꼭 필요한 곳에만 사용하시길 바랍니다
// import React, { useState, useMemo } from 'react';

// function 부하(){
//   let s = 0
//   for (let i = 0; i < 1000000000; i++) {
//     s += i
//   }
//   return s
// }

// function App() {
//   const [count, setCount] = useState(0)
//   const [countTwo, setCountTwo] = useState(0)

//   const handleCountUp = (e) => {
//     setCount(count + 1)
//     console.log(count)
//   }
//   const handleCountUpTwo = (e) => {
//     setCountTwo(countTwo + 1)
//     console.log(countTwo)
//   }

//   console.log('랜더링!!')

//   const result = useMemo(()=>{
//     return 부하()
//   }, [countTwo])

//   return (
//     <div className="App">
//       <h1>계산 결과 : {result}</h1>
//       <div>{count}</div>
//       <button onClick={handleCountUp}>up!</button>
//       <div>{countTwo}</div>
//       <button onClick={handleCountUpTwo}>up!</button>
//     </div>
//   );
// }

// export default App;