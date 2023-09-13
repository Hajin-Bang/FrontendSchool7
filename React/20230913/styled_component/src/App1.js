import { createGlobalStyle } from "styled-components"
import Example from "./Components/Example"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    span {
    color: red;
    font-size: 12px;
    }

    a{
        text-decoration : none;
        color : inherit;
    }

    button{
        border : none;
        cursor : pointer;
    }

    * {
    box-sizing: border-box;
    }
`

function App() {
    // console.log(reset)
    // 값으로 나오는건 찍어서 알아보는 습관을 길러보자!
  return (
    <>
      <GlobalStyle/>
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example/>
    </>
  );
}

export default App;