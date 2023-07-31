import Home from "./screens/Home";
import {
  BrowserRouter, 
  Route,
  Routes,
} from "react-router-dom";
import Login from "./screens/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min"
import Signup from "./screens/Signup";
import { ContextReducerProvider } from "./ContextReducer/ContextReducerProvider";
import MyOrders from "./screens/MyOrders";


function App() {
  return (
    <>
    <ContextReducerProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/myorders' element={<MyOrders/>}/>
    </Routes>
    </BrowserRouter>
    </ContextReducerProvider>
    </>
  );
}

export default App;
