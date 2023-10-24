import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './layout/Layout'
import Product from './pages/Product'
import ErrorPage from './error/ErrorPage'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import { Provider } from 'react-redux'
import { store } from './store/store'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'',
        element: <Home/>,
        errorElement: <ErrorPage/>
      },
      {
        path:'shop',
        element: <Shop/>,
        errorElement: <ErrorPage/>,
      },
      {
        path:'shop/:productId',
        element: <Product/>,
        errorElement: <ErrorPage/>
      },
      {
        path:'contact',
        element: <h1>Contact</h1>,
        errorElement: <ErrorPage/>
      },
      {
        path:'cart',
        element: <Cart/>,
        errorElement: <ErrorPage/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
  
)
