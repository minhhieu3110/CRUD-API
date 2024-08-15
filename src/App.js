import './App.css'
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Left from "./Components/Left";
import Right from "./Components/Right";
import ListProduct from "./Pages/ListProduct";
import {Route, Routes, useLocation} from "react-router-dom";
import AddProduct from "./Pages/AddProduct";
import EditProduct from "./Pages/EditProduct";
import DetailProduct from "./Pages/DetailProduct";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ListUsers from "./Pages/ListUsers";
import DetailUser from "./Pages/DetailUser";
export default function App(){
    const location = useLocation().pathname === '/'
    return(
        <div className='container text-center'>
            <Header/>
            <NavBar/>
            <div className="row">
                <Left/>
                <div className="col-7">
                    <Routes>
                        <Route path={'add-product'} element={<AddProduct/>}/>
                        <Route path={'edit-product/:id'} element={<EditProduct/>}/>
                        <Route path={'detail-product/:id'} element={<DetailProduct/>}/>
                        <Route path={'list-users'} element={<ListUsers/>}/>
                        <Route path={'detail-user/:id'} element={<DetailUser/>}/>
                        <Route path={'login'} element={<Login/>}/>
                        <Route path={'register'} element={<Register/>}/>
                    </Routes>
                    {location ? <ListProduct/> : null}
                </div>
                <Right/>
            </div>
        </div>
    )
}