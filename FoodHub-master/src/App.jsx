
import Header from "./components/Header"
import Footer from "./components/Footer"
import { createBrowserRouter,Outlet } from 'react-router-dom';
import Body from "./components/Body";
import Error from './components/Error';
import About from './components/About';
import Contact from './components/Contact';
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/LogIn"

import { Provider } from "react-redux";
import store from "./utils/store";



const AppLayOut = ()=>{
  return(
    <>
    <Provider store={store}>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </Provider>
    </>
  )
}

const appRouter = createBrowserRouter(
  [
    {
      path:"/",
      element:<AppLayOut/>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"/",
          element:<Body></Body>
        },
        {
          path:"about",
          element:<About></About>,
        },
        {
          path:"contact",
          element:<Contact></Contact>
        },
        {
          path:"restaurant/:resId",
          element:<RestaurantMenu></RestaurantMenu>
        },
      ]
    }
    ,
    {
      path:"/login",
      element:<Login></Login>
    }
    ,{
      path:"/cart",
      element:<Provider store={store}><Cart></Cart></Provider>
    }

  ]
)



export default appRouter;
