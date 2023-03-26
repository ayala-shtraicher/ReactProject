import { Link, Route, Routes } from "react-router-dom"
import AllDonation from "./AllDonation"
import Buy from "./Buy"
import Donation from "./Donation"
import Login from "./Login"
import Product from "./Product"
import Products from "./Products"
import ProductsTable from "./ProductsTable"
import UserContext from "./UserContext"
import UserDetail from "./UserDetail"
import AddProduct from "./AddProduct"

export default function Router(){

    return(

        <>
        <nav>
            <Link className="links" to="/">Login</Link>
            <Link className="links" to="/donation">Donation</Link>
            <Link className="links" to="/userDetail">User Detail</Link>
            <Link className="links" to="/products">Products</Link>
        </nav>
        {localStorage.getItem("roleUser")=="manager"? 
        <>
            <nav>
             <Link className="links" to="/productsTable">Products Table</Link>
             <Link className="links" to="/allDonation">All Donation</Link>
            </nav>
        </>
        :
        <>
        </>
        }
       
        <Routes>
        <Route  path="/" element={<Login/>}></Route>
        <Route  path="/userDetail" element={<UserDetail/>}></Route>
        <Route  path="/products" element={<UserContext><Products/></UserContext>}></Route>
        <Route  path="/productsTable" element={<UserContext><ProductsTable/></UserContext>}></Route>
        <Route  path="/product/:name/:img/:price" element={<UserContext><Product/></UserContext>}></Route>
        <Route  path="/donation" element={<UserContext><Donation/></UserContext>}></Route>
        <Route  path="/allDonation" element={<UserContext><AllDonation/></UserContext>}></Route>
        <Route  path="/buy/:name/:price" element={<Buy></Buy>}></Route>
        <Route  path="/addProduct" element={<AddProduct/>}></Route>
        </Routes>

        </>
    )
}