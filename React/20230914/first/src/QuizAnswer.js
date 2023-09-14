import { BrowserRouter, Routes, Route, useParams, Outlet, Link, useNavigate } from "react-router-dom"

function App() {
    return(
        <BrowserRouter>
            {/* 번회: a태그와 linke to의 차이 
            a는 버튼을 누르면 새로고침 됨 
            link to는 페이지 전환이 일어나도 새로고침되지 않는다
            한 페이지 안에서(한 서비스 내에서서) 전환이 일어나는 것처럼 보여주고싶다면 link 태그를 쓰는 것이 좋다 
            (전혀 다른 페이지로 이동하는 것이면 a태그 사용)*/}
            <a href="/cart">카트</a>
            <br/>
            <Link to="/">홈</Link>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/cart" element={<Cart/>}/>

                {/* 중첩라우트를 쓰는 법법 (Outlet: 라우트에서 자식으로 있는 컴포넌트를 꺼내서 보여주는 컴포넌트*/}

                {/* <Route path="/users/*" element={<Outlet/>}> */}
                <Route path="/users/*" element={<Users/>}>
                    {/* 이 안에 중첩할 라우트들이 들어갑니다 */}
                    {/* <Route path="" element={<Users/>}/> */}
                    <Route path="coupon" element={<CouponPage/>}/>
                    <Route path="question" element={<QuestionPage/>}/>
                    <Route path="notice" element={<NoticePage/>}/>
                </Route>
                <Route path="/products/:id" element={<ProductDetailPage/>}/>
                <Route path="/products/:id/notice" element={<ProductDetailNoticePage/>}/>
            </Routes>

            <Button>
                {/* 번외2: 페이지 새로고침을 하지 않고 함수를 통해 페이지 이동을 할 수 있는 방법*/}
                {/* /user로 이동하는 버튼 */}
            </Button>
        </BrowserRouter>
    )
}

function Button() {
    const navigate = useNavigate();
    return <button onClick={() => navigate("./users")}>유저보기</button>
}   


function HomePage() {
    return <h1>홈페이지</h1>
}

function Cart() {
    return <h1>카트</h1>
}
function Users() {
    return (
    <div>
        <h1>유저들</h1>
        <Outlet/>
        {/* 부모요소를 계속 나타내면서, 자식 요소도 함께 바꿔가며 나타내고싶다면 outlet사용  */}
        {/* 위에서 outlet을 사용하지 않고 바로 user를 쓰고, 여기서 outlet을 부르면 된다! */}

        {/* 결론 */}
        {/* 위에서 outlet으로 감싼 뒤 하위에 user를 두면, 
        /users를 썼을 때만 "유저들"이 출력된다. 
        만약 "유저들"은 고정으로 출력되고, 그 자식 요소인 쿠폰,질문,공지만 돌아가면서 뜨게 하고 싶다면
        위에서는 USER/로 감싸고 이곳에 Outlet을 불러주면 된다.  */}
    </div>
    )
}

function ProductDetailPage() {
    const {id} = useParams();
    return <h1>{id}번 상품입니다~!</h1>
}

function CouponPage() {
    return <h1>쿠폰</h1>
}

function QuestionPage() {
    return <h1>질문</h1>
}

function NoticePage() {
    return <h1>공지</h1>
}

function ProductDetailNoticePage() {
    const {id} = useParams()
    return <h1>{id}번 상품 상세 알림 페이지 </h1>
}

export default App;