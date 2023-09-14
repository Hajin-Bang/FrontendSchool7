import { BrowserRouter, Routes, Route, Link, useLocation, Outlet, useParams } from "react-router-dom";


// Home Page :/
// Product Detail Page: /products/:id
//  ex) /products/1 , /products/2, /products/3, /products/4
// Product Detail Notice Page:/products/:id/notice
//   ex) /products/1/notice , /products/2/notice…
// Cart Page :/cart
// Coupon Page : /users/coupon
// Question Page :/users/question
// Notice Page :/users/notice
// User Page : /users

function App() {
    return (
      <BrowserRouter>
        <Link to="/"> HomePage </Link>
        <Link to="/products"> Product </Link>
        <Link to="/cart"> Cart </Link>
        <Link to="/users"> users </Link>
        {/* 라우트를 감싸줍니다. */}
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/products" element={<Products name='bag' />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/users/*" element={<UserPage />}>
            <Route path="" element={<UsersIndex/>}/>
            <Route path="coupon/" element={<Coupon/>}/>
            <Route path="question/" element={<Question/>}/>
            <Route path="notice/" element={<Notice/>}/>
          </Route>
          <Route path="/products/:id/*" element={<ProductDetailPage />}/>
            <Route path="/products/:id/notice/" element={<ProductsNotice/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  
  function Homepage(){
    return <h1>homepage</h1>
  }
  
  function Products({name}){
    return <h1>{name} shop</h1>
  }
  
  function Cart(){
    return <h1>YOUR CART</h1>
  }
  
  function UserPage(){
    return <h1>userhi</h1>
  }
  
  function ProductDetailPage(){
      const {id} = useParams();
    return <h1>{id} 상품</h1>
  }
  
  function UsersIndex(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Hojun index</h1>
}

function Coupon(){
	const location = useLocation();
  console.log(location)
  return <h1>coupon</h1>
}

function Question(){
	const location = useLocation();
  console.log(location)
  return <h1>question</h1>
}

function Notice(){
	const location = useLocation();
  console.log(location)
  return <h1>notice</h1>
}

function ProductsNotice(){
	const {id} = useParams();
  return <h1>{id} notice</h1>
}

  export default App;