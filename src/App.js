import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Pages/Layout/Layout';
import Homepage from './Pages/Homepage/Homepage'
import Products from './Pages/Products/Products';
import Login from './Pages/Login/Login';
import MyAccount from './Pages/MyAccount/MyAccount';
import ProductDetail from './Pages/ProductDetail/ProductDetail';



function App() {

  const router = createBrowserRouter([{
    path:"",
    element: <Layout/>,
    children:[
      {index:true ,element: <Homepage/>},
      {path:"login", element: <Login/>},
      {path:"myAccount", element:<MyAccount/>},
      {path:"products", element: <Products/>},
      {path:"products/:product", element: <ProductDetail/>, }
    ]
  }
])


  return (
    <RouterProvider router={router}/>
  );
}

export default App;
