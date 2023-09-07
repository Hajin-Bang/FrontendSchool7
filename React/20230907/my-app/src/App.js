import './App.css';

// function App() {
//   const name = "방하진";
//   function hajin() {
//     return 'hajin';
//   }
//   const someStyle = {backgroundColor: "gray", color: "white"};
//   // 인라인 요소에 style={someStyle}로 적용할 수 있다.

//   return (
//     <div tabIndex="" className="App">
//       <h1 className="h1" style={someStyle}>안녕 {name} {10+10} {[1,2,3].map(x=>x*2)} {hajin()}!</h1>
//       <h1 className="newClass">안녕 라이캣!</h1>
//       {/* 주석 */}
//       <input type="text" maxLength={10} style={{backgroundColor: "salmon"}}/>
//       {/* 1. class => className
//           2. 문자형을 제외한 속성값은 모두 중괄호 안에 넣어야 함 
//           3. true값을 갖는 속성은 속성 이름만으로 사용 가능(false는 중괄호 해야함)
//           ==> disabled={true}* 는 disabled 만 작성하는 것과 같다
//           4. 인라인 스타일로 적용할 때는 "-"를 사용할 수 없고, {{}}로 묶어서 사용 */}
//     </div>
//   );

//   //date객체 사용하기
//   /**
//    * new Date()로  생성자 함수 생성
//    * const time = new Date()
//    * time ==> 출력
//    * getFullYear() : 년도를 알려주는 메소드
//    * => time.getFullYear() 
//    * getMonth: 월을 알려주는 메소드 => 인덱스로 표기하기 때문에 0부터 시작
//    * ==> 1월: 0, 8월: 9 ==> 왜일까? 
//    * getDate: 일을 알려주는 
//    */
// }


//실습
function App() {
  const date = new Date();
  return (
    <div style={{backgroundColor: "black"}}>
      <h1 style={{color: "red"}}>년: {date.getFullYear()}</h1>
      <h2 style={{color: "white"}}>월/일 : {date.getMonth() + 1 }/{date.getDate()}</h2>
      <h3 style={{color: "white"}}>시간 : {date.getHours()}시 {date.getMinutes()}분 {date.getSeconds()}초</h3>
    </div>
  );
}

export default App;

