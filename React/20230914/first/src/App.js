import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}그치마
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
      </Routes>
    </BrowserRouter>
    // 페이지가 여러개인 것 처럼 보여지는 방법 
    // 같은 index.html 페이지가 랜더링 되지만, 그 밑에는 각각 다른 컴포넌트를 사용하기 때문

    // /one 주소로 가면 => <One/> 컴포넌트 매칭
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One(){
  return <h1>hello world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

export default App;