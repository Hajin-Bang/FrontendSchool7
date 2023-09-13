import { createGlobalStyle } from "styled-components"
import Example from "./Components/Example"



// 태그드 템플릿 리터럴을 사용하여 함수를 사용하는 기법
// createGlobalStyle

const GlobalStyle = createGlobalStyle`
span {
  color: red;
  font-size: 12px;
}
.box {
  background-color: red;
}
`

function App() {
  return (
    <>
      <GlobalStyle/> {/* 전역 스타일 컴포넌트 */}
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example/>
    </>
  );
}

export default App;